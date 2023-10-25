#ifndef DeviceManager_H
#define DeviceManager_H

#include <ArduinoJson.h>
#include <HTTPClient.h>
#include <LittleFS.h>

#define RESTART_DELAY 5000

class DeviceManager {
public:
  String deviceId;
  DeviceManager(String SUPABASE_URL, String SUPABASE_TOKEN);
  void assignDeviceId();
  bool saveDeviceId();
  void fsInit();

private:
  String SUPABASE_URL;
  String SUPABASE_TOKEN;
};

#endif
