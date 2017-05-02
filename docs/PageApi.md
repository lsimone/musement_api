# MusementApi.PageApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pagesIdGet**](PageApi.md#pagesIdGet) | **GET** /pages/{id} | Get page by ID


<a name="pagesIdGet"></a>
# **pagesIdGet**
> Page pagesIdGet(id)

Get page by ID

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.PageApi();

var id = 56; // Number | Page identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pagesIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Page identifier | 

### Return type

[**Page**](Page.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

