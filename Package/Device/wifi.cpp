#include <Arduino.h>
#include <WiFi.h>
#include <LittleFS.h>
#include <ArduinoJson.h>

#define WIFI_TIMEOUT 10000

class WiFiManager {
public:
    WiFiManager() {
        // Constructor
    }

    bool connect() {
        Serial.printf("Establishing WiFi connection to '%s'...\n", ssid.c_str());

        WiFi.begin(ssid.c_str(), password.c_str());

        unsigned long startTime = millis();
        while (millis() - startTime < WIFI_TIMEOUT) {
            if (WiFi.status() == WL_CONNECTED) {
                Serial.println("WiFi connection established.");
                return true;
            }

            delay(100);
        }

        Serial.println("Could not establish WiFi connection.");
        return false;
    }

    void initialize() {
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

        setCredentials(doc["ssid"].as<String>(), doc["password"].as<String>());
        
        connect();
    }

    void setCredentials(const String& newSsid, const String& newPassword) {
        ssid = newSsid;
        password = newPassword;
    }

private:
    String ssid;
    String password;
};
