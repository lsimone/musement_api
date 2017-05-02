# MusementApi.EventsApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesCountryIdEventsGet**](EventsApi.md#countriesCountryIdEventsGet) | **GET** /countries/{countryId}/events | Get all events for a country


<a name="countriesCountryIdEventsGet"></a>
# **countriesCountryIdEventsGet**
> [Event] countriesCountryIdEventsGet(countryId, opts)

Get all events for a country

Get all events for a country sorted by relevance. If priority_city is specified the event for that city are returned first&#39;

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventsApi();

var countryId = 56; // Number | Country identifier

var opts = { 
  'vertical': 56, // Number | Vertical identifier
  'priorityCity': 56, // Number | Prioritize results that belong to this city
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesCountryIdEventsGet(countryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryId** | **Number**| Country identifier | 
 **vertical** | **Number**| Vertical identifier | [optional] 
 **priorityCity** | **Number**| Prioritize results that belong to this city | [optional] 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

