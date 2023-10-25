#include "sensor-manager.h"

SensorManager::SensorManager() {
}

void SensorManager::readSensors() {
  sensorData[0] = random(500);
  sensorData[1] = random(500);
  sensorData[2] = random(500);
  sensorData[3] = random(500);
  sensorData[4] = random(500);
  sensorData[5] = random(500);
}

void SensorManager::sendSensorData(String deviceId, String SUPABASE_URL, String SUPABASE_TOKEN) {
  HTTPClient client;

  String jsonPayload = "{\"deviceid\":\"" + deviceId + "\",";
  jsonPayload += "\"sensor1\":" + String(sensorData[0]) + ",";
  jsonPayload += "\"sensor2\":" + String(sensorData[1]) + ",";
  jsonPayload += "\"sensor3\":" + String(sensorData[2]) + ",";
  jsonPayload += "\"sensor4\":" + String(sensorData[3]) + ",";
  jsonPayload += "\"sensor5\":" + String(sensorData[4]) + ",";
  jsonPayload += "\"sensor6\":" + String(sensorData[5]);
  jsonPayload += "}";

  // Begin the HTTP request
  client.begin(SUPABASE_URL + "/rest/v1/rpc/handle_sensor");
  client.addHeader("Authorization", "Bearer " + SUPABASE_TOKEN);
  client.addHeader("apikey", SUPABASE_TOKEN);
  client.addHeader("Content-Type", "application/json");

  // Send the POST request
  int httpResponseCode = client.POST(jsonPayload);

  // Check the response code
  if (httpResponseCode > 0) {
    Serial.print("Request ");
    Serial.print(" - Response code: ");
    Serial.println(httpResponseCode);
  } else {
    Serial.print("Request ");
    Serial.print(" - Response code: ");
    Serial.println(httpResponseCode);
  }

  // End the HTTP request
  client.end();
}
