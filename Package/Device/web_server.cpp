// WebServerHandler.cpp
#include "web_server.h"
#include "wifi.h"
#define AP_SSID "Sams"
#define AP_PASSWORD "12345678"


WebServerHandler::WebServerHandler(AsyncWebServer* server, const String& deviceId)
  : server(server), deviceId(deviceId) {
}

void WebServerHandler::handleRootRoute(AsyncWebServerRequest* request) {
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
