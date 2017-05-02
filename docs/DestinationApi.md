# MusementApi.DestinationApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**destinationsDestinationIdGet**](DestinationApi.md#destinationsDestinationIdGet) | **GET** /destinations/{destinationId} | Get destination by unique identifier


<a name="destinationsDestinationIdGet"></a>
# **destinationsDestinationIdGet**
> Destination destinationsDestinationIdGet(destinationId)

Get destination by unique identifier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.DestinationApi();

var destinationId = 56; // Number | Destination identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.destinationsDestinationIdGet(destinationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **destinationId** | **Number**| Destination identifier | 

### Return type

[**Destination**](Destination.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

