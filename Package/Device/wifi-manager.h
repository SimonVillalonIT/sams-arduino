#ifndef wifi-manager_h
#define wifi-manager_h

#include <ArduinoJson.h>
#include <LittleFS.h>
#include <WiFi.h>

#define WIFI_TIMEOUT 5000

class WiFiManager {
public:
  WiFiManager();
  void init();
  bool connect(String ssid, String password);
  bool saveCredentials();

private:
  String ssid;
  String password;
};

#endif
