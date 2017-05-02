# MusementApi.MediaApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsEventIdMediaGet**](MediaApi.md#eventsEventIdMediaGet) | **GET** /events/{eventId}/media | Get all media for an event


<a name="eventsEventIdMediaGet"></a>
# **eventsEventIdMediaGet**
> [GalleryMedia] eventsEventIdMediaGet(eventId)

Get all media for an event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.MediaApi();

var eventId = 56; // Number | Event identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdMediaGet(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 

### Return type

[**[GalleryMedia]**](GalleryMedia.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

