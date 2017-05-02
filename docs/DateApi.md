# MusementApi.DateApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsEventIdDatesGet**](DateApi.md#eventsEventIdDatesGet) | **GET** /events/{eventId}/dates | Get available dates for an event
[**eventsEventIdGiftScheduleGet**](DateApi.md#eventsEventIdGiftScheduleGet) | **GET** /events/{eventId}/gift-schedule | Get schedule for a &#39;Gift creation&#39; for an Event
[**eventsEventIdScheduleDayGet**](DateApi.md#eventsEventIdScheduleDayGet) | **GET** /events/{eventId}/schedule/{day} | Get schedule for a day for an event
[**eventsEventIdScheduleDayGiftCodeGet**](DateApi.md#eventsEventIdScheduleDayGiftCodeGet) | **GET** /events/{eventId}/schedule/{day}/{giftCode} | Get schedule for Gift and specific day


<a name="eventsEventIdDatesGet"></a>
# **eventsEventIdDatesGet**
> ModelDate eventsEventIdDatesGet(eventId, opts)

Get available dates for an event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.DateApi();

var eventId = 56; // Number | Event identifier

var opts = { 
  'dateFrom': "dateFrom_example", // String | Start date | If not specified set to today | Use format: YYYY-MM-DD
  'dateTo': "dateTo_example" // String | To date | If not specified set to next year | Use format: YYYY-MM-DD
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdDatesGet(eventId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 
 **dateFrom** | **String**| Start date | If not specified set to today | Use format: YYYY-MM-DD | [optional] 
 **dateTo** | **String**| To date | If not specified set to next year | Use format: YYYY-MM-DD | [optional] 

### Return type

[**ModelDate**](ModelDate.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="eventsEventIdGiftScheduleGet"></a>
# **eventsEventIdGiftScheduleGet**
> GiftSchedule eventsEventIdGiftScheduleGet(eventId)

Get schedule for a &#39;Gift creation&#39; for an Event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.DateApi();

var eventId = 56; // Number | Event identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdGiftScheduleGet(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 

### Return type

[**GiftSchedule**](GiftSchedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="eventsEventIdScheduleDayGet"></a>
# **eventsEventIdScheduleDayGet**
> [Schedule] eventsEventIdScheduleDayGet(eventIdday, , opts)

Get schedule for a day for an event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.DateApi();

var eventId = 56; // Number | Event identifier

var day = "day_example"; // String | Day | Use format: YYYY-MM-DD

var opts = { 
  'ticketsNumber': "ticketsNumber_example" // String | Number of ticket requested tickets |Only useful for real time events
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdScheduleDayGet(eventIdday, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 
 **day** | **String**| Day | Use format: YYYY-MM-DD | 
 **ticketsNumber** | **String**| Number of ticket requested tickets |Only useful for real time events | [optional] 

### Return type

[**[Schedule]**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="eventsEventIdScheduleDayGiftCodeGet"></a>
# **eventsEventIdScheduleDayGiftCodeGet**
> [Schedule] eventsEventIdScheduleDayGiftCodeGet(eventIdday, giftCode)

Get schedule for Gift and specific day

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.DateApi();

var eventId = 56; // Number | Event identifier

var day = "day_example"; // String | Day | Use format: YYYY-MM-DD

var giftCode = "giftCode_example"; // String | Gift code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdScheduleDayGiftCodeGet(eventIdday, giftCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 
 **day** | **String**| Day | Use format: YYYY-MM-DD | 
 **giftCode** | **String**| Gift code | 

### Return type

[**[Schedule]**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

