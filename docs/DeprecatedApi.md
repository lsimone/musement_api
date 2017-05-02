# MusementApi.DeprecatedApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsSearchGet**](DeprecatedApi.md#eventsSearchGet) | **GET** /events/search | Deprecated API for search - Use search-extended endpoint


<a name="eventsSearchGet"></a>
# **eventsSearchGet**
> eventsSearchGet(opts)

Deprecated API for search - Use search-extended endpoint

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.DeprecatedApi();

var opts = { 
  'limit': 10 // Number | Max number of items in the response
  'offset': 0, // Number | Pagination offset
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsSearchGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]
 **offset** | **Number**| Pagination offset | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

