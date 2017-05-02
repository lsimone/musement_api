# MusementApi.FeaturesMetadataApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**featuresGet**](FeaturesMetadataApi.md#featuresGet) | **GET** /features | Get all the available features


<a name="featuresGet"></a>
# **featuresGet**
> [TranslatedMetadata] featuresGet()

Get all the available features

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.FeaturesMetadataApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featuresGet(callback);
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

