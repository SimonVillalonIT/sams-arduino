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

void SensorManager::sendSensorData(HTTPClient& client, String& deviceId, String& SUPABASE_URL, String& SUPABASE_TOKEN) {
  // Create a JSON payload for each sensor
  for (int sensorIndex = 0; sensorIndex < 6; sensorIndex++) {
    String jsonPayload = "{\"deviceid\":\"" + deviceId + "\",";
    jsonPayload += "\"sensor" + String(sensorIndex + 1) + "\":" + String(sensorData[sensorIndex]);
    jsonPayload += "}";

    Serial.println(jsonPayload);

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
      Serial.print(sensorIndex + 1);
      Serial.print(" - Response code: ");
      Serial.println(httpResponseCode);
    } else {
      Serial.print("Request ");
      Serial.print(sensorIndex + 1);
      Serial.print(" - Response code: ");
      Serial.println(httpResponseCode);
    }

    // End the HTTP request
    client.end();
  }
}
