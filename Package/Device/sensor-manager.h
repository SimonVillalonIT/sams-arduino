#ifndef SensorManager_h
#define SensorManager_h

#include <Arduino.h>

class SensorManager {
public:
  SensorManager();
  void readSensors();
  void sendSensorData();
};

#endif


