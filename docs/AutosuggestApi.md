# MusementApi.AutosuggestApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**suggestGet**](AutosuggestApi.md#suggestGet) | **GET** /suggest | Search relevant items in Musement DB


<a name="suggestGet"></a>
# **suggestGet**
> suggestGet(opts)

Search relevant items in Musement DB

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.AutosuggestApi();

var opts = { 
  'q': "q_example" // String | Search string. Minimum 3 chars
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.suggestGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Search string. Minimum 3 chars | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

