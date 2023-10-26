#ifndef SensorManager_h
#define SensorManager_h

#include <HTTPClient.h>

class SensorManager {
public:
  SensorManager();
  void readSensors();
  void sendSensorData(HTTPClient& client,String& deviceId, String& SUPABASE_URL, String& SUPABASE_TOKEN);
private:
  int sensorData[6];
};

#endif
