# MusementApi.LanguageApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**languagesGet**](LanguageApi.md#languagesGet) | **GET** /languages | Get all the possible content languages


<a name="languagesGet"></a>
# **languagesGet**
> languagesGet()

Get all the possible content languages

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.LanguageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.languagesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

