#include <ESPAsyncWebSrv.h>

#include <WiFi.h>

const char* ssid = "Nodemcu_Saimon";  // Nombre de la red WiFi del punto de acceso
const char* password = "Password1";  // Contraseña de la red WiFi del punto de acceso

AsyncWebServer server(80);

const char* htmlContent = R"(<!DOCTYPE html>
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
        <div class="form-value">
          <form action="/form" method="post">
            <h2>Configurar red</h2>
            <div class="inputbox">
              <input type="text" name="ssid" required />
              <label for="">SSID</label>
            </div>
            <div class="inputbox">
              <input type="password" name="password" required />
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

void setup() {
  Serial.begin(115200);

  // Inicializar el punto de acceso WiFi
  WiFi.softAP(ssid, password);
  IPAddress IP = WiFi.softAPIP();
  Serial.print("Dirección IP del Punto de Acceso: ");
  Serial.println(IP);

  // Configurar rutas en el servidor web
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    // Servir el código HTML almacenado en el string
    request->send(200, "text/html", htmlContent);
  });

  server.on("/form", HTTP_POST, [](AsyncWebServerRequest *request){
    // Manejar los datos del formulario
    String ssid;
    String password;
    if (request->hasParam("ssid", true)) {
      ssid = request->getParam("ssid", true)->value();
    }
    if (request->hasParam("password", true)) {
      password = request->getParam("password", true)->value();
    }
      Serial.println(ssid);
      Serial.println(password);
    request->send(200, "text/plain", "SSID recibido: " + ssid + "<br> Password: " + password);
  });

  // Iniciar el servidor web
  server.begin();
}

void loop() {
  // No se requiere ninguna lógica adicional en el loop
}
