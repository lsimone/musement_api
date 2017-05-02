# MusementApi.BundleApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsEventIdBundlesGet**](BundleApi.md#eventsEventIdBundlesGet) | **GET** /events/{eventId}/bundles | Get bundles related to an event


<a name="eventsEventIdBundlesGet"></a>
# **eventsEventIdBundlesGet**
> Bundle eventsEventIdBundlesGet(eventId)

Get bundles related to an event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BundleApi();

var eventId = 56; // Number | Event identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdBundlesGet(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 

### Return type

[**Bundle**](Bundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

