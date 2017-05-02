# MusementApi.CartBundleApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartsCartIdBundlesGet**](CartBundleApi.md#cartsCartIdBundlesGet) | **GET** /carts/{cartId}/bundles | Get the bundle in a cart


<a name="cartsCartIdBundlesGet"></a>
# **cartsCartIdBundlesGet**
> Bundle cartsCartIdBundlesGet(cartId)

Get the bundle in a cart

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartBundleApi();

var cartId = 56; // Number | Cart identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartsCartIdBundlesGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| Cart identifier | 

### Return type

[**Bundle**](Bundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

