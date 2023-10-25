#ifndef device-manager_h
#define device-manager_h

#include <ArduinoJson.h>
#include <HTTPClient.h>
#include <LittleFS.h>

#define RESTART_DELAY 5000

class DeviceManager {
public:
  DeviceManager(String SUPABASE_URL, String SUPABASE_TOKEN);
  void assignDeviceId();
  bool saveDeviceId();

private:
  String deviceId;
  String SUPABASE_URL;
  String SUPABASE_TOKEN;
};

#endif

