#include <LittleFS.h>
#include <ArduinoJson.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ESPAsyncWebSrv.h>

#include "secrets.h"

#define WIFI_TIMEOUT 5000  // ms

#define AP_SSID "Sams"
#define AP_PASSWORD "12345678"

#define RESTART_DELAY 5000            // ms
#define FAILED_REQUEST_TIMEOUT 60000  // ms

String deviceId;
HTTPClient httpClient;
AsyncWebServer server(80);
DynamicJsonDocument device(1024);
char sensorData[128];
const int sensorPin = 36;

void fsInit() {
  /* Inicializar LittleFS normalmente. Si falla,
    intentar hacerlo con autoformateo */
  if (LittleFS.begin()) {
    Serial.println("Filesystem successfully initialized.");
    return;
  };

  if (LittleFS.begin(true)) {
    Serial.println("Filesystem successfully initialized with autoformat.");
    return;
  };

  Serial.println("Coulnd not initialize the filesystem.");
}

bool wifiConnect(String ssid, String password) {
  Serial.printf("Establishing WiFi connection to '%s'...\n", ssid.c_str());

  WiFi.begin(ssid, password);

  unsigned long startTime = millis();
  while (millis() - startTime < WIFI_TIMEOUT) {
    if (WiFi.status() == WL_CONNECTED) {
      Serial.println("WiFi connection established.");
      return true;
    };

    delay(100);
  }

  Serial.println("Could not establish WiFi connection.");
  return false;
}

void wifiInit() {
  Serial.println("Initializing WiFi connection...");

  File file = LittleFS.open("/wifi.json");
  if (!file) {
    Serial.println("There were no saved WiFi credentials.");
    return;
  }

  DynamicJsonDocument doc(512);
  DeserializationError error = deserializeJson(doc, file);
  file.close();
  if (error) {
    Serial.println("There was an error trying to deserialize the WiFi credentials.");
    return;
  }

  wifiConnect(doc["ssid"].as<String>(), doc["password"].as<String>());
}

bool wifiSave(String ssid, String password) {
  Serial.println("Saving WiFi credentials...");

  File file = LittleFS.open("/wifi.json", "w+");
  if (!file) {
    Serial.println("There was an error trying open the WiFi credentials file.");
    return false;
  }

  DynamicJsonDocument doc(512);
  doc["ssid"] = ssid;
  doc["password"] = password;
  bool dumped = serializeJson(doc, file);
  if (dumped) {
    Serial.println("WiFi credentials saved successfully.");
  } else {
    Serial.println("There was an error trying to save the WiFi credentials.");
  }

  file.close();
  return dumped;
}

bool saveDeviceId() {
  Serial.println("Saving device id...");

  File file = LittleFS.open("/deviceId.txt", "w+");
  if (!file) {
    Serial.println("There was an error trying open the device id file.");
    return false;
  }

  file.print(deviceId);
  file.close();

  return true;
}
void assignBoardId() {

  Serial.println("Getting device id...");

  File file = LittleFS.open("/deviceId.txt");
  if (file) {
    deviceId = file.readStringUntil('\n');
    file.close();

    Serial.printf("Device id: '%s'.\n", deviceId.c_str());
    return;
  }


  HTTPClient http;
  String url = SUPABASE_URL + "/rest/v1/rpc/insert_device_and_return_id";

  http.begin(url);
  http.addHeader("Authorization", "Bearer " + SUPABASE_TOKEN);
  http.addHeader("apikey", SUPABASE_TOKEN);
  http.addHeader("Accept", "application/json");


  int httpResponseCode = http.POST("{}");

  if (httpResponseCode == 200) {
    String response = http.getString();
    Serial.println("Response: " + response);

    // Parse JSON response
    StaticJsonDocument<256> jsonDocument;
    DeserializationError error = deserializeJson(jsonDocument, response);

    if (error) {
      Serial.println("Error parsing JSON.");
      return;
    }

    // Extract "id" value
    JsonArray idArray = jsonDocument.as<JsonArray>();
    JsonObject idObject = idArray[0];
    deviceId = idObject["id"].as<String>();

    Serial.println("Device ID: " + deviceId);
  } else {
    Serial.print("Error code: ");
    Serial.println(httpResponseCode);
  }

  http.end();

  if (!deviceId) {
    Serial.println("There was an error trying to generate the device id.");
    return;
  }

  bool saved = saveDeviceId();
  if (saved) {
    Serial.println("Device id saved successfully.");
    return;
  }

  /* Error fatal ya que no se pudo guardar el id del dispositivo.
    Se reinicia el dispositivo completamente */
  Serial.println("There was a fatal error trying to save the device id.");
  Serial.printf("Restarting device in %dms...\n", RESTART_DELAY);
  delay(RESTART_DELAY);
  ESP.restart();
}



void handleServerRootRoute(AsyncWebServerRequest *request) {
  Serial.printf("[WebServer]: GET / @%s\n", request->client()->remoteIP().toString().c_str());

  String rootHTML = R"(<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Configurar Red</title>
    <style>
      * {
        margin: 0;
        padding: 0%;
        font-family: "poppins", sans-serif;
      }
      section {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        width: 100%;
        background: linear-gradient(
          to right,
          rgb(55, 65, 81),
          rgb(17, 24, 39),
          rgb(0, 0, 0)
        );
        background-position: center;
        background-size: cover;
      }
      .form-box {
        position: relative;
        width: 400px;
        height: 450px;
        background: transparent;
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        backdrop-filter: blur(15px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h2 {
        font-size: 2em;
        color: #fff;
        text-align: center;
      }
      .inputbox {
        position: relative;
        margin: 30px 0;
        width: 310px;
        border-bottom: 2px solid #fff;
      }
      .inputbox label {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        color: #fff;
        font-size: 1em;
        pointer-events: none;
        transition: 0.5s;
      }
      input:focus ~ label,
      input:focus ~ :valid {
        top: -5px;
      }
      .inputbox input {
        width: 100%;
        height: 50px;
        background: transparent;
        border: none;
        outline: none;
        font-size: 1em;
        padding: 0 35px 0 5px;
        color: #fff;
      }
      .inputbox ion-icon {
        position: absolute;
        right: 8px;
        color: #fff;
        font-size: 1.2em;
        top: 20px;
      }
      button {
        width: 100%;
        height: 40px;
        border-radius: 40px;
        background: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
      }
    </style>
  </head>
  <body>
    <section>
      <div class="form-box">
      )";
  rootHTML += "<span>deviceId: '" + deviceId + "'</span>";
  rootHTML += R"(
        <div class="form-value">
          <form action="/wifi" method="POST">
            <h2>Configurar red</h2>
            <div class="inputbox">
              <input id="pass_id" type="text" name="ssid" required />
              <label for="">SSID</label>
            </div>
            <div class="inputbox">
              <input type="password" id="password" name="password" required />
              <label for="">Contraseña</label>
            </div>
            <button>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  </body>
</html>

)";

  request->send(200, "text/html", rootHTML);
}

void handleServerWifiRoute(AsyncWebServerRequest *request) {
  Serial.printf("[WebServer]: POST /wifi @%s\n", request->client()->remoteIP().toString().c_str());

  if (!request->hasParam("ssid", true) || !request->hasParam("password", true)) {
    return request->send(400, "text/plain", "Invalid request.");
  }

  String ssid = request->getParam("ssid", true)->value();
  String password = request->getParam("password", true)->value();

  bool connected = wifiConnect(ssid, password);
  if (!connected) {
    return request->send(401, "text/plain", "Invalid WiFi credentials.");
  }

  bool saved = wifiSave(ssid, password);
  if (!saved) {
    return request->send(500, "text/plain", "There was an internal server error trying to save the WiFi credentials.");
  }

  request->send(200, "text/plain", "WiFi successfully connected and saved.");
}


void setup() {
  Serial.begin(115200);

  // Inicializar sistema de archivos
  fsInit();

  // Inicializar WiFi desde el archivo guardado
  wifiInit();

  // Obtener el id del dispositivo
  assignBoardId();

  analogReadResolution(12);  // Set ADC resolution to 12 bits (0-4095)
  analogSetAttenuation(ADC_11db);

  // Inicializar punto de acceso y servidor web
  WiFi.softAP(AP_SSID, AP_PASSWORD);
  server.on("/", HTTP_GET, handleServerRootRoute);
  server.on("/wifi", HTTP_POST, handleServerWifiRoute);
  server.begin();
}

void loop() {
  // Esperar hasta que tenga conexión WiFi
  if (WiFi.status() != WL_CONNECTED) {
    delay(100);
    return;
  }

  // Si no tengo la id del dispositivo, la obtengo
  if (deviceId.isEmpty()) {
    assignBoardId();
    return;
  }

  // Example array of sensor data
  int sensorData[] = {random(500), random(500), random(500), random(500), random(500), random(500)};
  Serial.println(random(500));
  // Initialize the HTTP client
  HTTPClient client;

  // Iterate over the array and send each element to the backend

    String jsonPayload = "{\"deviceid\":\"" + deviceId + "\",";
jsonPayload += "\"sensor1\":" + String(sensorData[0]) + ",";
jsonPayload += "\"sensor2\":" + String(sensorData[1]) + ",";
jsonPayload += "\"sensor3\":" + String(sensorData[2]) + ",";
jsonPayload += "\"sensor4\":" + String(sensorData[3]) + ",";
jsonPayload += "\"sensor5\":" + String(sensorData[4]) + ",";
jsonPayload += "\"sensor6\":" + String(sensorData[5]);
jsonPayload += "}";

    // Begin the HTTP request
    client.begin(SUPABASE_URL + "/rest/v1/rpc/handle_sensor");
    client.addHeader("Authorization", "Bearer " + SUPABASE_TOKEN);
    client.addHeader("apikey", SUPABASE_TOKEN);
    client.addHeader("Content-Type", "application/json");

    // Send the POST request
    int httpResponseCode = client.POST(jsonPayload);

    // Check the response code
    if (httpResponseCode > 0) {
      Serial.print("Request ");
      Serial.print(" - Response code: ");
      Serial.println(httpResponseCode);
    } else {
      Serial.print("Request ");
      Serial.print(" - Response code: ");
      Serial.println(httpResponseCode);
    }

    // End the HTTP request
    client.end();

  delay(5000);
}
