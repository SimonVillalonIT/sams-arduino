#include <ESPAsyncWebSrv.h>

#include <WiFi.h>

const char* ssid = "Nodemcu_Saimon";  // Nombre de la red WiFi del punto de acceso
const char* password = "Password1";  // Contraseña de la red WiFi del punto de acceso

AsyncWebServer server(80);

const char* htmlContent = R"(
<!DOCTYPE html>
<html>
<head>
  <title>Formulario</title>
</head>
<body>
  <h1>Formulario</h1>
  <form action="/form" method="post">
    <input type="text" name="input_name" placeholder="Nombre">
    <input type="submit" value="Enviar">
  </form>
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
    String message;
    if (request->hasParam("input_name", true)) {
      message = request->getParam("input_name", true)->value();
    }
      Serial.println(message);
    request->send(200, "text/plain", "Mensaje recibido: " + message);
  });

  // Iniciar el servidor web
  server.begin();
}

void loop() {
  // No se requiere ninguna lógica adicional en el loop
}