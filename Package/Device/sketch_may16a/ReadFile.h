#include <Arduino.h>
#include <LittleFS.h>
#include <ArduinoJson.h>

bool readJsonFromFile(String& ssid, String& password) {
  // Open the file in read mode
  File file = LittleFS.open("/data.json", "r");
  if (!file) {
    Serial.println("Failed to open file for reading");
    return false;
  }

  // Allocate a buffer to hold the JSON data
  const size_t bufferSize = 1024;
  DynamicJsonDocument doc(bufferSize);

  // Deserialize the JSON object from the file
  DeserializationError error = deserializeJson(doc, file);
  if (error) {
    Serial.println("Failed to read from file");
    file.close();
    return false;
  }

  // Extract values from the JSON object
  ssid = doc["ssid"].as<String>();
  password = doc["password"].as<String>();

  // Close the file
  file.close();
  return true;
}
