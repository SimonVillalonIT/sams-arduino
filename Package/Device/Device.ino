/* ---------------------------------------------------------------
Include require libraries to handle WIFI and EEPROM functions
connect Push button to switch ESP32 to access point on demand
For ESP32 connect push button at GPIO4
and ESP8266 connect push button at GPIO 6

Press push button to continuously till the defined delay in Arduino sketch to make it access point.
*/

#ifdef ESP8266
#include <ESP8266WiFi.h> // Pins for board ESP8266 Wemos-NodeMCU
#include <ESP8266WebServer.h>
ESP8266WebServer serverAP(80);
#define accessPointButtonPin D6 // Connect a button to this pin
#else
#include <WiFi.h>
#include <WebServer.h>
#define accessPointButtonPin 4 // Connect a button to this pin
WebServer serverAP(80); // the Access Point Server
#endif

#include <EEPROM.h>
#define accessPointLed 2
#define eepromTextVariableSize 33 // the max size of the ssid, password etc. 32+null terminated

//---------- wifi default settings ------------------
char ssid[eepromTextVariableSize] = "Simon-esp";
char pass[eepromTextVariableSize] = "12345678";


boolean accessPointMode = false; // is true every time the board is started as Access Point
boolean debug = true;
unsigned long lastUpdatedTime = 0;

int pushDownCounter = 0;
int lastConnectedStatus = 0;

//================================================ initAsAccessPoint
void initAsAccessPoint() {
WiFi.softAP("ESP32-Access Point"); // or WiFi.softAP("ESP_Network","Acces Point Password");
if (debug) Serial.println("AccesPoint IP: " + WiFi.softAPIP().toString());
Serial.println("Mode= Access Point");
//WiFi.softAPConfig(local_ip, gateway, subnet); // enable this line to change the default Access Point IP address
delay(100);
}

//========================================= connect
void checkWiFiConnection() {
if (WiFi.status() != WL_CONNECTED) {
if (lastConnectedStatus == 1) Serial.println("WiFi disconnected\n");
lastConnectedStatus = 0;
Serial.print(".");
delay(500);
} else {
if (lastConnectedStatus == 0) {
Serial.println("Mode= Client");
Serial.print("\nWiFi connectd to :");
Serial.println(ssid);
Serial.print("\n\nIP address: ");
Serial.println(WiFi.localIP());

}
lastConnectedStatus = 1;
}

}
//================================================ setup
//================================================
void setup() {
Serial.begin(115200);
delay(500);

//--- Check the first EEPROM byte. If this byte is "2" the board will start as Access Point
int st = getStatusFromEeprom();
if (st == 2) accessPointMode = true;
else if (st != 0) saveSettingsToEEPPROM(ssid, pass); // run the void saveSettingsToEEPPROM on the first running or every time you want to save the default settings to eeprom
Serial.println("\n\naccessPointMode=" + String(accessPointMode));

readSettingsFromEEPROM(ssid, pass); // read the SSID and Passsword from the EEPROM
Serial.println(ssid);
Serial.println(pass);
if (accessPointMode) { // start as Access Point
initAsAccessPoint();
serverAP.on("/", handle_OnConnect);
serverAP.onNotFound(handle_NotFound);
serverAP.begin();
saveStatusToEeprom(0); // enable the Client mode for the the next board starting
}
else { // start as client
Serial.println("Mode= Client");
WiFi.begin(ssid, pass);
// Enter your client setup code here
}


pinMode(accessPointButtonPin, INPUT);
pinMode(accessPointLed, OUTPUT);

}


//============================================== loop
//==============================================
void loop() {
if (accessPointMode) {
serverAP.handleClient();
playAccessPointLed(); // blink the LED every time the board works as Access Point
}
else {
checkWiFiConnection();


// enter your client code here

if (millis() - lastUpdatedTime > 5000) {
lastUpdatedTime = millis();
}
}
checkIfModeButtonPushed();
}

//============================================
//--- Mode selector Button - push down handler
void checkIfModeButtonPushed() {
while (digitalRead(accessPointButtonPin)) {
pushDownCounter++;
if (debug) Serial.println(pushDownCounter);
delay(1000);
if (pushDownCounter == 10) { // after 2 seconds the board will be restarted
if (!accessPointMode) saveStatusToEeprom(2); // write the number 2 to the eeprom
ESP.restart();
}
}
pushDownCounter = 0;
}

//============================================ playAccessPointLed
unsigned long lastTime = 0;
void playAccessPointLed() {
if (millis() - lastTime > 300) {
lastTime = millis();
digitalWrite(accessPointLed, !digitalRead(accessPointLed));
}
}

//================ WiFi Manager necessary functions ==============
//================================================================
//================================================================

//==============================================
void handle_OnConnect() {
if (debug) Serial.println("Client connected: args=" + String(serverAP.args()));
if (serverAP.args() >= 2) {
handleGenericArgs();
serverAP.send(200, "text/html", SendHTML(1));
}
else serverAP.send(200, "text/html", SendHTML(0));
}

//==============================================
void handle_NotFound() {
if (debug) Serial.println("handle_NotFound");
serverAP.send(404, "text/plain", "Not found");
}

//=================================
void handleGenericArgs() { //Handler
for (int i = 0; i < serverAP.args(); i++) {
if (debug) Serial.println("*** arg(" + String(i) + ") =" + serverAP.argName(i));
if (serverAP.argName(i) == "ssid") {
if (debug) Serial.print("sizeof(ssid)="); Serial.println(sizeof(ssid));
memset(ssid, '\0', sizeof(ssid));
strcpy(ssid, serverAP.arg(i).c_str());
}
else if (serverAP.argName(i) == "pass") {
if (debug) Serial.print("sizeof(pass)="); Serial.println(sizeof(pass));
memset(pass, '\0', sizeof(pass));
strcpy(pass, serverAP.arg(i).c_str());
}
}
if (debug) Serial.println("*** New settings have received");
if (debug) Serial.print("*** ssid="); Serial.println(ssid);
if (debug) Serial.print("*** password="); Serial.println(pass);




saveSettingsToEEPPROM(ssid, pass);

}
//===================================
String SendHTML(uint8_t st) {
  String ptr = R"(<!DOCTYPE html>
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
          <form>
            <h2>Configurar red</h2>
            <div class="inputbox">
              <input id="pass_id" type="text" name="ssid" required />
              <label for="">SSID</label>
            </div>
            <div class="inputbox">
              <input type="password" id="ssid_id" name="pass" required />
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

  return ptr;
  
}



//====================== EEPROM necessary functions ==============
//================================================================
//================================================================
#define eepromBufferSize 200 // have to be > eepromTextVariableSize * (eepromVariables+1) (33 * (5+1))

//========================================== writeDefaultSettingsToEEPPROM
void saveSettingsToEEPPROM(char* ssid_, char* pass_) {
if (debug) Serial.println("\n============ saveSettingsToEEPPROM");
writeEEPROM(1 * eepromTextVariableSize , eepromTextVariableSize , ssid_);
writeEEPROM(2 * eepromTextVariableSize , eepromTextVariableSize , pass_);
}
//========================================== readSettingsFromEeprom
void readSettingsFromEEPROM(char* ssid_, char* pass_) {
readEEPROM( 1 * eepromTextVariableSize , eepromTextVariableSize , ssid_);
readEEPROM( (2 * eepromTextVariableSize) , eepromTextVariableSize , pass_);




if (debug) Serial.println("\n============ readSettingsFromEEPROM");
if (debug) Serial.print("\n============ ssid="); if (debug) Serial.println(ssid_);
if (debug) Serial.print("============ password="); if (debug) Serial.println(pass_);


}

//================================================================
void writeEEPROM(int startAdr, int length, char* writeString) {
EEPROM.begin(eepromBufferSize);
yield();
for (int i = 0; i < length; i++) EEPROM.write(startAdr + i, writeString[i]);
EEPROM.commit();
EEPROM.end();
}

//================================================================
void readEEPROM(int startAdr, int maxLength, char* dest) {
EEPROM.begin(eepromBufferSize);
delay(10);
for (int i = 0; i < maxLength; i++) dest[i] = char(EEPROM.read(startAdr + i));
dest[maxLength - 1] = 0;
EEPROM.end();
}

//================================================================ writeEepromSsid
void saveStatusToEeprom(byte value) {
EEPROM.begin(eepromBufferSize);
EEPROM.write(0, value);
EEPROM.commit();
EEPROM.end();
}
//===================================================================
byte getStatusFromEeprom() {
EEPROM.begin(eepromBufferSize);
byte value = 0;
value = EEPROM.read (0);
EEPROM.end();
return value;
}
