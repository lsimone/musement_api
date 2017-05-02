# MusementApi.POITypesApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**poiTypesGet**](POITypesApi.md#poiTypesGet) | **GET** /poi-types | Get all the POI types


<a name="poiTypesGet"></a>
# **poiTypesGet**
> [TranslatedMetadata] poiTypesGet()

Get all the POI types

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.POITypesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.poiTypesGet(callback);
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

