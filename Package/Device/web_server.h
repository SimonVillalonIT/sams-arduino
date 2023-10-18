// WebServerHandler.h
#ifndef WebServerHandler_h
#define WebServerHandler_h

#include <Arduino.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebSrv.h>

class WebServerHandler {
public:
    WebServerHandler(AsyncWebServer* server, const String& deviceId);
    void handleRootRoute(AsyncWebServerRequest* request);
    void handleServerWifiRoute(AsyncWebServerRequest *request);

private:
    AsyncWebServer* server;
    String deviceId;
};

#endif
