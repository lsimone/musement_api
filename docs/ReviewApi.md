# MusementApi.ReviewApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersMeReviewsGet**](ReviewApi.md#customersMeReviewsGet) | **GET** /customers/me/reviews | Get all reviews for the user logged in


<a name="customersMeReviewsGet"></a>
# **customersMeReviewsGet**
> Comment customersMeReviewsGet()

Get all reviews for the user logged in

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ReviewApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersMeReviewsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Comment**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

