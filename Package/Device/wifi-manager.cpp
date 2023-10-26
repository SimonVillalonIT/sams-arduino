#include "wifi-manager.h"

WiFiManager::WiFiManager() {
  this->ssid = ssid;
  this->password = password;
}

bool WiFiManager::detect(AsyncWebServerRequest *request) {
    // Initialize a variable to store the number of networks found
    int n = 0;

    // Try to scan for networks and handle exceptions
    try {
        n = WiFi.scanNetworks();
    } catch (const std::exception &e) {
        // Handle the exception, such as printing an error message
        Serial.println("Exception during network scan: " + String(e.what()));
    }

    // Print the number of networks found
    Serial.println("Number of networks found: " + String(n));
}

bool WiFiManager::connect(String ssid , String password ) {
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



void WiFiManager::init() {
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

  connect(doc["ssid"].as<String>(), doc["password"].as<String>());
}

bool WiFiManager::saveCredentials() {
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

