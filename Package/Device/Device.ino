#include <LittleFS.h>
#include <ArduinoJson.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <ESPAsyncWebSrv.h>

#include "FileManager.h"
#include "web_server.h"
#include "secrets.h"

#define WIFI_TIMEOUT 5000  // ms

#define RESTART_DELAY 5000            // ms
#define FAILED_REQUEST_TIMEOUT 60000  // ms

String deviceId;
HTTPClient httpClient;
AsyncWebServer server(80);
DynamicJsonDocument device(1024);
char sensorData[128];
const int sensorPin = 36;

WebServerHandler webServerHandler(&server, deviceId);
FileManager fileManager;

void setup() {
  Serial.begin(115200);

  // Inicializar sistema de archivos
   fileManager.fsInit();
 
  // Inicializar WiFi desde el archivo guardado
  wifiInit();

  // Obtener el id del dispositivo
  assignBoardId();

  analogReadResolution(12);  // Set ADC resolution to 12 bits (0-4095)
  analogSetAttenuation(ADC_11db);

  // Inicializar punto de acceso y servidor web
  WiFi.softAP(AP_SSID, AP_PASSWORD);
  server.on("/", HTTP_GET, [](AsyncWebServerRequest * request) {
    webServerHandler.handleRootRoute(request);
  });
  server.on("/wifi", HTTP_POST, [](AsyncWebServerRequest * request) {
    webServerHandler.handleServerWifiRoute(request);
  });
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
