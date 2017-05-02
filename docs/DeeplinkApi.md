# MusementApi.DeeplinkApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deeplinksGet**](DeeplinkApi.md#deeplinksGet) | **GET** /deeplinks | Get deeplink for a specific URL


<a name="deeplinksGet"></a>
# **deeplinksGet**
> Deeplink deeplinksGet(url)

Get deeplink for a specific URL

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.DeeplinkApi();

var url = 56; // Number | Relative URL base64 encoded


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deeplinksGet(url, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **Number**| Relative URL base64 encoded | 

### Return type

[**Deeplink**](Deeplink.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

