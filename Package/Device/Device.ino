#include <WiFi.h>
#include <ESPAsyncWebSrv.h>
#include <HTTPClient.h>
#include "secrets.h"
#include "sensor-manager.h"
#include "device-manager.h"
#include "wifi-manager.h"

#define WIFI_TIMEOUT 5000  // ms
#define AP_SSID "sams board"
#define AP_PASSWORD "password1"
#define RESTART_DELAY 5000  // ms

AsyncWebServer server(80);
WiFiManager wifiManager;
DeviceManager deviceManager(SUPABASE_URL, SUPABASE_TOKEN);
SensorManager sensorManager;
HTTPClient client ;

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

        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: linear-gradient(to right,
                    rgb(55, 65, 81),
                    rgb(17, 24, 39),
                    rgb(0, 0, 0));
            background-position: center;
            background-size: cover;
        }

        section {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: fit-content;
        }

        .form-box {
            margin-top: 20px;
            position: relative;
            min-width: 310px;
            max-width: 80%;
            height: 350px;
            padding: 10px;
            background: transparent;
            border: 2px solid rgba(255, 255, 255, 0.5);
            border-radius: 20px;
            backdrop-filter: blur(15px);
            display: flex;
            flex-direction: column;
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
            width: 100%;
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

        input:focus~label,
        input:valid~label {
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

        .id {
            width: 100%;
            color: #fff;
            text-align: center;
            font-weight: bold;
            text-wrap: wrap;
            margin-bottom: 10px;
            word-break: break-all;
        }

        #networks {
            margin-bottom: 20px;
            overflow: scroll;
        }

        .network-item {
            width: 100%;
            text-decoration: none;
            list-style: none;
            cursor: pointer;
            padding: 10px 0 10px 0;
            font-size: 20px;
            color: #fff;
            border-bottom: 1px solid #ffffff20;
            user-select: none;
        }

        .network-item p {
            margin-left: 10px;
        }

        .network-item:hover,
        .network-item:active {
            background-color: #ffffff80;
            animation-delay: .3s;
        }

        ul {
            width: 100%;
            height: 95%;
        }
    </style>
</head>

<body>
    <div class="form-box">
        <h2>Busca tu red</h2>
        <ul id="networks">
        </ul>
        <button type="submit" id="refresh">Refrescar</button>
    </div>
    <section>
        <div class="form-box">
            )";
  rootHTML += "<span class='id'>'" + deviceManager.deviceId + "'</span>";
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
    <script>
       const networksList = document.getElementById("networks"); // Parent element

// Use event delegation to capture click events on network items
networksList.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("network-item")) {
        // Check if the clicked element has the "network-item" class
        const clickedNetwork = e.target.querySelector("p").textContent;
        const ssid = document.getElementById("pass_id");
        ssid.value = clickedNetwork;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // When the page loads, fetch and display the Wi-Fi networks
    fetchNetworks();

    // Add a click event listener to the refresh button
    document.getElementById("refresh").addEventListener("click", function() {
        fetchNetworks();
    });
});

function fetchNetworks() {
    // Make an AJAX request to get the list of Wi-Fi networks
    fetch("/detect")
        .then(response => response.json())
        .then(data => {
            // Clear the existing list
            networksList.innerHTML = "";

            // Populate the list with the scanned Wi-Fi networks
            data.networks.forEach(network => {
                const li = document.createElement("li");
                li.classList.add("network-item");
                const p = document.createElement("p");
                p.textContent = network;
                li.appendChild(p);
                networksList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching networks:", error);
        });
}
    </script>
</body>

</html>)";

  request->send(200, "text/html", rootHTML);
}

void handleServerWifiRoute(AsyncWebServerRequest *request) {
  Serial.printf("[WebServer]: POST /wifi @%s\n", request->client()->remoteIP().toString().c_str());

  if (!request->hasParam("ssid", true) || !request->hasParam("password", true)) {
    return request->send(400, "text/plain", "Invalid request.");
  }

  String ssid = request->getParam("ssid", true)->value();
  String password = request->getParam("password", true)->value();

  bool connected = wifiManager.connect(ssid, password);
  if (!connected) {
    return request->send(401, "text/plain", "Invalid WiFi credentials.");
  }

  bool saved = wifiManager.saveCredentials();
  if (!saved) {
    return request->send(500, "text/plain", "Hubo un error en interno, por favor intente nuevamente.");
  }

  request->send(200, "text/plain", "WiFi exitosamente guardado y conectado. Vuelve atrás para ver el ID del dispositivo.");
}

void setup() {
  Serial.begin(115200);
  int numNetworks = WiFi.scanNetworks();

  // Create a JSON object to store the network names
  StaticJsonDocument<1024> jsonDocument;
  JsonArray networks = jsonDocument.createNestedArray("networks");

  // Add the network names to the JSON object
  for (int i = 0; i < numNetworks; i++) {
    networks.add(WiFi.SSID(i));
  }

  // Send the JSON response
  String jsonResponse;
  serializeJson(jsonDocument, jsonResponse);

  WiFi.softAP(AP_SSID, AP_PASSWORD);
  server.on("/", HTTP_GET, handleServerRootRoute);
  server.on("/wifi", HTTP_POST, handleServerWifiRoute);
  server.on("/detect", HTTP_GET, [jsonResponse](AsyncWebServerRequest *request){
    request->send(200, "application/json", jsonResponse);
  });

  server.begin();

  deviceManager.fsInit();

  wifiManager.init();
  deviceManager.assignDeviceId();
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    delay(100);
    return;
  }

  if (deviceManager.deviceId.isEmpty()) {
    deviceManager.assignDeviceId();
    return;
  }

  sensorManager.readSensors();
  sensorManager.sendSensorData(client, deviceManager.deviceId, SUPABASE_URL, SUPABASE_TOKEN);
  delay(10000);
}
