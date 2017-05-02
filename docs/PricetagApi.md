# MusementApi.PricetagApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pricetagsIdGet**](PricetagApi.md#pricetagsIdGet) | **GET** /pricetags/{id} | Get the name for a pricetag


<a name="pricetagsIdGet"></a>
# **pricetagsIdGet**
> Pricetag pricetagsIdGet(id)

Get the name for a pricetag

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.PricetagApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pricetagsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Pricetag**](Pricetag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

