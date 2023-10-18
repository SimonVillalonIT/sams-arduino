 #include "secrets.h"
 
 #include "FileManager.h"

FileManager::FileManager() {
    // Constructor
}

void FileManager::fsInit() {
    /* Inicializar LittleFS normalmente. Si falla,
    intentar hacerlo con autoformateo */
    if (LittleFS.begin()) {
        Serial.println("Filesystem successfully initialized.");
        return;
    }

    if (LittleFS.begin(true)) {
        Serial.println("Filesystem successfully initialized with autoformat.");
        return;
    }

    Serial.println("Could not initialize the filesystem.");
}

bool FileManager::save(const String& newSsid, const String& newPassword) {
    Serial.println("Saving WiFi credentials...");

    File file = LittleFS.open("/wifi.json", "w+");
    if (!file) {
        Serial.println("There was an error trying to open the WiFi credentials file.");
        return false;
    }

    DynamicJsonDocument doc(512);
    doc["ssid"] = newSsid;
    doc["password"] = newPassword;
    bool dumped = serializeJson(doc, file);
    if (dumped) {
        Serial.println("WiFi credentials saved successfully.");
    } else {
        Serial.println("There was an error trying to save the WiFi credentials.");
    }

    file.close();
    return dumped;
}

bool FileManager::saveDeviceId() {
    Serial.println("Saving device id...");

    File file = LittleFS.open("/deviceId.txt", "w+");
    if (!file) {
        Serial.println("There was an error trying to open the device id file.");
        return false;
    }

    file.print(deviceId);
    file.close();

    return true;
}

void FileManager::assignBoardId() {
    Serial.println("Getting device id...");

    File file = LittleFS.open("/deviceId.txt");
    if (file) {
        deviceId = file.readStringUntil('\n');
        file.close();

        Serial.printf("Device id: '%s'.\n", deviceId.c_str());
        return;
    }

    HTTPClient http;
    String url = SUPABASE_URL + "/rest/v1/rpc/insert_device_and_return_id";

    http.begin(url);
    http.addHeader("Authorization", "Bearer " + SUPABASE_TOKEN);
    http.addHeader("apikey", SUPABASE_TOKEN);
    http.addHeader("Accept", "application/json");

    int httpResponseCode = http.POST("{}");

    if (httpResponseCode == 200) {
        String response = http.getString();
        Serial.println("Response: " + response);

        // Parse JSON response
        StaticJsonDocument<256> jsonDocument;
        DeserializationError error = deserializeJson(jsonDocument, response);

        if (error) {
            Serial.println("Error parsing JSON.");
            return;
        }

        // Extract "id" value
        JsonArray idArray = jsonDocument.as<JsonArray>();
        JsonObject idObject = idArray[0];
        deviceId = idObject["id"].as<String>();

        Serial.println("Device ID: " + deviceId);
    } else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
    }

    http.end();

    if (!deviceId) {
        Serial.println("There was an error trying to generate the device id.");
        return;
    }

    bool saved = saveDeviceId();
    if (saved) {
        Serial.println("Device id saved successfully.");
        return;
    }

    /* Error fatal ya que no se pudo guardar el id del dispositivo.
    Se reinicia el dispositivo completamente */
    Serial.println("There was a fatal error trying to save the device id.");
    Serial.printf("Restarting device in %dms...\n", RESTART_DELAY);
    delay(RESTART_DELAY);
    ESP.restart();
}
