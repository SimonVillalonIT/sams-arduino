#include <WiFi.h>
#include "secrets.h"
#include "sensor-manager.h"
#include "device-manager.h"
#include "wifi-manager.h"

#define WIFI_TIMEOUT 5000  // ms
#define AP_SSID "Sams"
#define AP_PASSWORD "12345678"
#define RESTART_DELAY 5000            // ms

WiFiManager wifiManager;
DeviceManager deviceManager(SUPABASE_URL, SUPABASE_TOKEN);
SensorManager sensorManager;

void setup() {
  Serial.begin(115200);
  fsInit();

  wifiManager.init();
  wifiManager.connect();
  deviceManager.assignDeviceId();
  analogReadResolution(12);
  analogSetAttenuation(ADC_11db);

  WiFi.softAP(AP_SSID, AP_PASSWORD);
  server.on("/", HTTP_GET, handleServerRootRoute);
  server.on("/wifi", HTTP_POST, handleServerWifiRoute);
  server.begin();
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) {
    delay(100);
    return;
  }

  if (deviceId.isEmpty()) {
    deviceManager.assignDeviceId();
    return;
  }

  sensorManager.readSensors();
  sensorManager.sendSensorData();
  delay(5000);
}

