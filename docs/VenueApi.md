# MusementApi.VenueApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**venuesVenueIdEventsGet**](VenueApi.md#venuesVenueIdEventsGet) | **GET** /venues/{venueId}/events | Get all events for a venue sorted by venue relevance.
[**venuesVenueIdGet**](VenueApi.md#venuesVenueIdGet) | **GET** /venues/{venueId} | Get a venue


<a name="venuesVenueIdEventsGet"></a>
# **venuesVenueIdEventsGet**
> [Event] venuesVenueIdEventsGet(venueId, opts)

Get all events for a venue sorted by venue relevance.

Get all events for an venue sorted by relevance. Only the events that have at least one active date in the period specified between date_from and date_to are returned. If date_from and date_to are not set then the period that will be set will be one year from the date of the request&#39;

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.VenueApi();

var venueId = 56; // Number | Venue identifier

var opts = { 
  'vertical': 56, // Number | Vertical identifier
  'city': 56, // Number | City identifier
  'category': 56, // Number | Category identifier
  'editorialCategory': 56, // Number | Editorial category identifier
  'dateFrom': "dateFrom_example", // String | Start date | Use format: YYYY-MM-DD
  'dateTo': "dateTo_example", // String | To date | Use format: YYYY-MM-DD
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
  'sortBy': "venue-relevance" // String | Sorting strategy
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.venuesVenueIdEventsGet(venueId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **venueId** | **Number**| Venue identifier | 
 **vertical** | **Number**| Vertical identifier | [optional] 
 **city** | **Number**| City identifier | [optional] 
 **category** | **Number**| Category identifier | [optional] 
 **editorialCategory** | **Number**| Editorial category identifier | [optional] 
 **dateFrom** | **String**| Start date | Use format: YYYY-MM-DD | [optional] 
 **dateTo** | **String**| To date | Use format: YYYY-MM-DD | [optional] 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]
 **sortBy** | **String**| Sorting strategy | [optional] [default to venue-relevance]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="venuesVenueIdGet"></a>
# **venuesVenueIdGet**
> venuesVenueIdGet(venueId)

Get a venue

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.VenueApi();

var venueId = 56; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.venuesVenueIdGet(venueId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **venueId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

