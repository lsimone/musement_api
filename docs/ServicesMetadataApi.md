# MusementApi.ServicesMetadataApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**servicesGet**](ServicesMetadataApi.md#servicesGet) | **GET** /services | Get all available services


<a name="servicesGet"></a>
# **servicesGet**
> [TranslatedMetadata] servicesGet()

Get all available services

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ServicesMetadataApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.servicesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TranslatedMetadata]**](TranslatedMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

