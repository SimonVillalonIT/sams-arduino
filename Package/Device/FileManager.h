#ifndef FileManager_h
#define FileManager_h

#include <Arduino.h>
#include <LittleFS.h>
#include <ArduinoJson.h>
#include <HTTPClient.h>

class FileManager {
public:
    FileManager();
    void fsInit();
    bool save(const String& newSsid, const String& newPassword);
    bool saveDeviceId();
    void assignBoardId();

private:
    String deviceId;
    const int RESTART_DELAY = 1000;  // Tiempo en milisegundos para reiniciar el dispositivo
};

#endif
