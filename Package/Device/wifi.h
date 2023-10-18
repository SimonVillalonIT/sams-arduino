// WiFiManager.h
#ifndef wifi_h
#define wifi_h

#include <Arduino.h>
#include <WiFi.h>
#include <LittleFS.h>
#include <ArduinoJson.h>

class WiFiManager {
public:
    WiFiManager();
    bool connect();
    void initialize();
    void setCredentials(const String& newSsid, const String& newPassword);

private:
    String ssid;
    String password;
};

#endif
