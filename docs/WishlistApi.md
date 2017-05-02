# MusementApi.WishlistApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersMeWishesIdDelete**](WishlistApi.md#customersMeWishesIdDelete) | **DELETE** /customers/me/wishes/{id} | Delete an item from user wishlist
[**wishesCodeGet**](WishlistApi.md#wishesCodeGet) | **GET** /wishes/{code} | Get a wish


<a name="customersMeWishesIdDelete"></a>
# **customersMeWishesIdDelete**
> customersMeWishesIdDelete(id)

Delete an item from user wishlist

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.WishlistApi();

var id = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.customersMeWishesIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="wishesCodeGet"></a>
# **wishesCodeGet**
> Wish wishesCodeGet(code)

Get a wish

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.WishlistApi();

var code = "code_example"; // String | Wish identifier in the form '[wish-id]-[wishtype]'


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.wishesCodeGet(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Wish identifier in the form &#39;[wish-id]-[wishtype]&#39; | 

### Return type

[**Wish**](Wish.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

