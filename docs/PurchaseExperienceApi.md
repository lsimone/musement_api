# MusementApi.PurchaseExperienceApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**feedbackRequestsFeedbackRequestNonceGet**](PurchaseExperienceApi.md#feedbackRequestsFeedbackRequestNonceGet) | **GET** /feedback-requests/{feedbackRequestNonce} | Get feedback request details


<a name="feedbackRequestsFeedbackRequestNonceGet"></a>
# **feedbackRequestsFeedbackRequestNonceGet**
> FeedbackRequest feedbackRequestsFeedbackRequestNonceGet(feedbackRequestNonce)

Get feedback request details

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.PurchaseExperienceApi();

var feedbackRequestNonce = "feedbackRequestNonce_example"; // String | Feedback request nonce


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.feedbackRequestsFeedbackRequestNonceGet(feedbackRequestNonce, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedbackRequestNonce** | **String**| Feedback request nonce | 

### Return type

[**FeedbackRequest**](FeedbackRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

