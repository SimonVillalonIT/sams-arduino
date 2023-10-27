#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

HTTPClient httpClient;

String SUPABASE_URL = "https://ltpmkkxjbdpcupjnnheh.supabase.co";
String SUPABASE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0cG1ra3hqYmRwY3Vwam5uaGVoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NTQ3MDMyNSwiZXhwIjoyMDAxMDQ2MzI1fQ.FyCA55_zu2GpX4DVxkEGp3VSLXeTBbTE16TZaBHeALk";
String deviceId = "784ac6e4-50ba-45b3-924d-aef6fc78c2d7";

void setup() {
  Serial.begin(115200);
  WiFi.begin("Fibertel WiFi362 2.4GHz", "01430573939");
}

void loop() {
  // Example array of sensor data
  int sensorData[] = { random(120), random(120), random(120), random(120), random(120), random(120) };

  // Create a JSON document for your payload
   // Example array of sensor data

  // Create a JSON document for your payload
  DynamicJsonDocument jsonDocument(256); // Adjust the size as needed

  // Add data to the JSON document
  jsonDocument["deviceid"] = deviceId;
  jsonDocument["sensor1"] = sensorData[0];
  jsonDocument["sensor2"] = sensorData[1];
  jsonDocument["sensor3"] = sensorData[2];
  jsonDocument["sensor4"] = sensorData[3];
  jsonDocument["sensor5"] = sensorData[4];
  jsonDocument["sensor6"] = sensorData[5];

  // Initialize the HTTP client
  HTTPClient *client = new HTTPClient;

  // Begin the HTTP request
  client->begin(SUPABASE_URL + "/rest/v1/rpc/handle_sensor");
  client->addHeader("Authorization", "Bearer " + SUPABASE_TOKEN);
  client->addHeader("apikey", SUPABASE_TOKEN);
  client->addHeader("Content-Type", "application/json");

  // Serialize the JSON document to a string
  String jsonPayload;
  serializeJson(jsonDocument, jsonPayload);

  // Send the POST request
  int httpResponseCode = client->POST(jsonPayload);

  // Check the response code
  if (httpResponseCode > 0) {
    Serial.print("Request - Response code: ");
    Serial.println(httpResponseCode);
    Serial.println(client->getString());
  } else {
    Serial.print("Request - Response code: ");
    Serial.println(httpResponseCode);
  }

  // End the HTTP request and free the memory
  client->end();
  delete client;

  // Delay and allow memory to be released
  delay(5000);
}