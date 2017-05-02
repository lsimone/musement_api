# MusementApi.BackgroundApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backgroundsGet**](BackgroundApi.md#backgroundsGet) | **GET** /backgrounds | Get backgrounds media


<a name="backgroundsGet"></a>
# **backgroundsGet**
> [Background] backgroundsGet(opts)

Get backgrounds media

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BackgroundApi();

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.backgroundsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**[Background]**](Background.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

