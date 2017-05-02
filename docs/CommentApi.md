# MusementApi.CommentApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsEventIdCommentsGet**](CommentApi.md#eventsEventIdCommentsGet) | **GET** /events/{eventId}/comments | Get comments for an event
[**feedbackRequestsFeedbackRequestNonceGet**](CommentApi.md#feedbackRequestsFeedbackRequestNonceGet) | **GET** /feedback-requests/{feedbackRequestNonce} | Get feedback request details


<a name="eventsEventIdCommentsGet"></a>
# **eventsEventIdCommentsGet**
> [Comment] eventsEventIdCommentsGet(eventId, opts)

Get comments for an event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CommentApi();

var eventId = 56; // Number | Event identifier

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
  'locale': "locale_example" // String | Set first comment in this language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdCommentsGet(eventId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]
 **locale** | **String**| Set first comment in this language | [optional] 

### Return type

[**[Comment]**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="feedbackRequestsFeedbackRequestNonceGet"></a>
# **feedbackRequestsFeedbackRequestNonceGet**
> FeedbackRequest feedbackRequestsFeedbackRequestNonceGet(feedbackRequestNonce)

Get feedback request details

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CommentApi();

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

