#include <Arduino.h>
#include <LittleFS.h>
#include <ArduinoJson.h>

void writeJsonToFile(const String& ssid, const String& password) {
  // Create a JSON object
  DynamicJsonDocument doc(1024);
  doc["ssid"] = ssid;
  doc["password"] = password;

  // Open the file in write mode
  File file = LittleFS.open("/data.json", "w");
  if (!file) {
    Serial.println("Failed to open file for writing");
    return;
  }

  // Serialize the JSON object to the file
  if (serializeJson(doc, file) == 0) {
    Serial.println("Failed to write to file");
  } else {
    Serial.println("JSON data written to file successfully");
  }

  // Close the file
  file.close();
}

void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  if (!LittleFS.begin()) {
    Serial.println("Error mounting LittleFS");
    while (1);
  }

  writeJsonToFile("Hello world", "password");
}

void loop() {
  // Empty loop
}
