# MusementApi.EventApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activitiesActivityUuidContentsLocaleCodeGet**](EventApi.md#activitiesActivityUuidContentsLocaleCodeGet) | **GET** /activities/{activityUuid}/contents/{localeCode} | Get activity content for a specific locale
[**categoriesCategoryIdEventsGet**](EventApi.md#categoriesCategoryIdEventsGet) | **GET** /categories/{categoryId}/events | Get events for a category sorted by category relevance.
[**citiesCityIdEventsGet**](EventApi.md#citiesCityIdEventsGet) | **GET** /cities/{cityId}/events | Get all verticals for a city
[**citiesCityIdEventsHappeningGet**](EventApi.md#citiesCityIdEventsHappeningGet) | **GET** /cities/{cityId}/events/{happening} | Get events
[**editorialCategoriesEditorialcategoryIdEventsGet**](EventApi.md#editorialCategoriesEditorialcategoryIdEventsGet) | **GET** /editorial-categories/{editorialcategoryId}/events | Get all events for an editorial category sorted by event relevance.
[**eventsEventIdBundlesGet**](EventApi.md#eventsEventIdBundlesGet) | **GET** /events/{eventId}/bundles | Get bundles related to an event
[**eventsEventIdCommentsGet**](EventApi.md#eventsEventIdCommentsGet) | **GET** /events/{eventId}/comments | Get comments for an event
[**eventsEventIdContactFormGet**](EventApi.md#eventsEventIdContactFormGet) | **GET** /events/{eventId}/contact-form | Get Event contact form
[**eventsEventIdContactRequestsPost**](EventApi.md#eventsEventIdContactRequestsPost) | **POST** /events/{eventId}/contact-requests | Send a contact request with submitted data.
[**eventsEventIdDatesGet**](EventApi.md#eventsEventIdDatesGet) | **GET** /events/{eventId}/dates | Get available dates for an event
[**eventsEventIdGet**](EventApi.md#eventsEventIdGet) | **GET** /events/{eventId} | Get event by unique identifier
[**eventsEventIdGiftScheduleGet**](EventApi.md#eventsEventIdGiftScheduleGet) | **GET** /events/{eventId}/gift-schedule | Get schedule for a &#39;Gift creation&#39; for an Event
[**eventsEventIdMediaGet**](EventApi.md#eventsEventIdMediaGet) | **GET** /events/{eventId}/media | Get all media for an event
[**eventsEventIdScheduleDayGet**](EventApi.md#eventsEventIdScheduleDayGet) | **GET** /events/{eventId}/schedule/{day} | Get schedule for a day for an event
[**eventsEventIdScheduleDayGiftCodeGet**](EventApi.md#eventsEventIdScheduleDayGiftCodeGet) | **GET** /events/{eventId}/schedule/{day}/{giftCode} | Get schedule for Gift and specific day
[**eventsGet**](EventApi.md#eventsGet) | **GET** /events | Get events
[**eventsSearchExtendedGet**](EventApi.md#eventsSearchExtendedGet) | **GET** /events/search-extended | API for search
[**feedbackRequestsFeedbackRequestNonceGet**](EventApi.md#feedbackRequestsFeedbackRequestNonceGet) | **GET** /feedback-requests/{feedbackRequestNonce} | Get feedback request details
[**venuesVenueIdEventsGet**](EventApi.md#venuesVenueIdEventsGet) | **GET** /venues/{venueId}/events | Get all events for a venue sorted by venue relevance.


<a name="activitiesActivityUuidContentsLocaleCodeGet"></a>
# **activitiesActivityUuidContentsLocaleCodeGet**
> ActivityContent activitiesActivityUuidContentsLocaleCodeGet(activityUuid, localeCode)

Get activity content for a specific locale

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var activityUuid = "activityUuid_example"; // String | Activity identifier

var localeCode = "localeCode_example"; // String | Locale code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activitiesActivityUuidContentsLocaleCodeGet(activityUuid, localeCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activityUuid** | **String**| Activity identifier | 
 **localeCode** | **String**| Locale code | 

### Return type

[**ActivityContent**](ActivityContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="categoriesCategoryIdEventsGet"></a>
# **categoriesCategoryIdEventsGet**
> [Event] categoriesCategoryIdEventsGet(categoryId, opts)

Get events for a category sorted by category relevance.

Get all events for a category sorted by category relevance. Only the events that have at least one active date in the period specified between date_from and date_to are returned. If date_from and date_to are not set then the period that will be set will be one year from the date of the request&#39;

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var categoryId = 56; // Number | Category identifier

var opts = { 
  'vertical': 56, // Number | Vertical identifier
  'city': 56, // Number | City identifier
  'venue': 56, // Number | Venue identifier
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
apiInstance.categoriesCategoryIdEventsGet(categoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**| Category identifier | 
 **vertical** | **Number**| Vertical identifier | [optional] 
 **city** | **Number**| City identifier | [optional] 
 **venue** | **Number**| Venue identifier | [optional] 
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

<a name="citiesCityIdEventsGet"></a>
# **citiesCityIdEventsGet**
> [Event] citiesCityIdEventsGet(cityId, opts)

Get all verticals for a city

Get all events for an city. Only the events that have at least one active date in the period specified between date_from and date_to are returned. If date_from and date_to are not set then the period that will be set will be one year from the date of the request&#39;

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var cityId = 56; // Number | City identifier

var opts = { 
  'vertical': 56, // Number | Vertical identifier
  'category': 56, // Number | Category identifier
  'venue': 56, // Number | Venue identifier
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
apiInstance.citiesCityIdEventsGet(cityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**| City identifier | 
 **vertical** | **Number**| Vertical identifier | [optional] 
 **category** | **Number**| Category identifier | [optional] 
 **venue** | **Number**| Venue identifier | [optional] 
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

<a name="citiesCityIdEventsHappeningGet"></a>
# **citiesCityIdEventsHappeningGet**
> [Event] citiesCityIdEventsHappeningGet(cityIdhappening, opts)

Get events

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var cityId = 56; // Number | City identifier

var happening = "happening_example"; // String | Events for today or tomorrow ?

var opts = { 
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
apiInstance.citiesCityIdEventsHappeningGet(cityIdhappening, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**| City identifier | 
 **happening** | **String**| Events for today or tomorrow ? | 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="editorialCategoriesEditorialcategoryIdEventsGet"></a>
# **editorialCategoriesEditorialcategoryIdEventsGet**
> [Event] editorialCategoriesEditorialcategoryIdEventsGet(editorialcategoryId, opts)

Get all events for an editorial category sorted by event relevance.

Get all events for an editorial category sorted by relevance. Only the events that have at least one active date in the period specified between date_from and date_to are returned. If date_from and date_to are not set then the period that will be set will be one year from the date of the request&#39;

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var editorialcategoryId = 56; // Number | Editorial category identifier

var opts = { 
  'vertical': 56, // Number | Vertical identifier
  'city': 56, // Number | City identifier
  'category': 56, // Number | Category identifier
  'venue': 56, // Number | Venue identifier
  'dateFrom': "dateFrom_example", // String | Start date | Use format: YYYY-MM-DD
  'dateTo': "dateTo_example", // String | To date | Use format: YYYY-MM-DD
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
  'sortBy': "relevance" // String | Sorting strategy
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorialCategoriesEditorialcategoryIdEventsGet(editorialcategoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editorialcategoryId** | **Number**| Editorial category identifier | 
 **vertical** | **Number**| Vertical identifier | [optional] 
 **city** | **Number**| City identifier | [optional] 
 **category** | **Number**| Category identifier | [optional] 
 **venue** | **Number**| Venue identifier | [optional] 
 **dateFrom** | **String**| Start date | Use format: YYYY-MM-DD | [optional] 
 **dateTo** | **String**| To date | Use format: YYYY-MM-DD | [optional] 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]
 **sortBy** | **String**| Sorting strategy | [optional] [default to relevance]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="eventsEventIdBundlesGet"></a>
# **eventsEventIdBundlesGet**
> Bundle eventsEventIdBundlesGet(eventId)

Get bundles related to an event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var eventId = 56; // Number | Event identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdBundlesGet(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 

### Return type

[**Bundle**](Bundle.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="eventsEventIdCommentsGet"></a>
# **eventsEventIdCommentsGet**
> [Comment] eventsEventIdCommentsGet(eventId, opts)

Get comments for an event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

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

<a name="eventsEventIdContactFormGet"></a>
# **eventsEventIdContactFormGet**
> Category eventsEventIdContactFormGet(eventId)

Get Event contact form

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var eventId = 56; // Number | Event identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdContactFormGet(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="eventsEventIdContactRequestsPost"></a>
# **eventsEventIdContactRequestsPost**
> eventsEventIdContactRequestsPost(eventId)

Send a contact request with submitted data.

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var eventId = 56; // Number | Event identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsEventIdContactRequestsPost(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="eventsEventIdDatesGet"></a>
# **eventsEventIdDatesGet**
> ModelDate eventsEventIdDatesGet(eventId, opts)

Get available dates for an event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

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

<a name="eventsEventIdGet"></a>
# **eventsEventIdGet**
> Event eventsEventIdGet(eventId)

Get event by unique identifier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var eventId = 56; // Number | Event identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdGet(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 

### Return type

[**Event**](Event.md)

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

var apiInstance = new MusementApi.EventApi();

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

<a name="eventsEventIdMediaGet"></a>
# **eventsEventIdMediaGet**
> [GalleryMedia] eventsEventIdMediaGet(eventId)

Get all media for an event

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var eventId = 56; // Number | Event identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsEventIdMediaGet(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **Number**| Event identifier | 

### Return type

[**[GalleryMedia]**](GalleryMedia.md)

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

var apiInstance = new MusementApi.EventApi();

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

var apiInstance = new MusementApi.EventApi();

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

<a name="eventsGet"></a>
# **eventsGet**
> [Event] eventsGet(opts)

Get events

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var opts = { 
  'ids': [3.4], // [Number] | Given events will always be returned (will not help achieve the limit quota)
  'limit': 56, // Number | Limit quota of events to return
  'page': 56, // Number | Page from which starting to return found events (mandatory if limit is given)
  'offset': 56, // Number | Offset from which starting to return found events (mandatory if limit is given cannot be used within the page parameter)
  'countryIn': [3.4], // [Number] | Filter, include only results from given counties identified by a collection of ids
  'notCountryIn': [3.4], // [Number] | Filter, exclude results from given counties identified by a collection of ids
  'cityIn': [3.4], // [Number] | Filter, include only results from given cities identified by a collection of ids
  'notCityIn': [3.4], // [Number] | Filter, exclude results from given cities identified by a collection of ids
  'active': true, // Boolean | Filter, include results on an activation status basis
  'temporary': true, // Boolean | Filter, include results on an temporary flag basis
  'sortBy': "sortBy_example" // String | Ordering criteria: [relevance|city_relevance], prepend `-` for descending order
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**[Number]**](Number.md)| Given events will always be returned (will not help achieve the limit quota) | [optional] 
 **limit** | **Number**| Limit quota of events to return | [optional] 
 **page** | **Number**| Page from which starting to return found events (mandatory if limit is given) | [optional] 
 **offset** | **Number**| Offset from which starting to return found events (mandatory if limit is given cannot be used within the page parameter) | [optional] 
 **countryIn** | [**[Number]**](Number.md)| Filter, include only results from given counties identified by a collection of ids | [optional] 
 **notCountryIn** | [**[Number]**](Number.md)| Filter, exclude results from given counties identified by a collection of ids | [optional] 
 **cityIn** | [**[Number]**](Number.md)| Filter, include only results from given cities identified by a collection of ids | [optional] 
 **notCityIn** | [**[Number]**](Number.md)| Filter, exclude results from given cities identified by a collection of ids | [optional] 
 **active** | **Boolean**| Filter, include results on an activation status basis | [optional] 
 **temporary** | **Boolean**| Filter, include results on an temporary flag basis | [optional] 
 **sortBy** | **String**| Ordering criteria: [relevance|city_relevance], prepend &#x60;-&#x60; for descending order | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="eventsSearchExtendedGet"></a>
# **eventsSearchExtendedGet**
> SearchResponse eventsSearchExtendedGet(opts)

API for search

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

var opts = { 
  'q': "q_example", // String | Query String
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
  'dateFrom': "dateFrom_example", // String | Start date | Use format: YYYY-MM-DD
  'dateTo': "dateTo_example", // String | To date | Use format: YYYY-MM-DD
  'verticalCollection': ["verticalCollection_example"], // [String] | List of verticals comma separated
  'categoryCollection': ["categoryCollection_example"], // [String] | List of categories comma separated
  'countryCollection': ["countryCollection_example"], // [String] | List of countries comma separated
  'cityCollection': ["cityCollection_example"], // [String] | List of cities comma separated
  'minPrice': "minPrice_example", // String | Minimum price for an event to be considered
  'maxPrice': "maxPrice_example", // String | Maximum price for an event to be considered
  'topFeature': "topFeature_example", // String | Query String
  'sorting': "relevance" // String | Sorting strategy
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsSearchExtendedGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Query String | [optional] 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]
 **dateFrom** | **String**| Start date | Use format: YYYY-MM-DD | [optional] 
 **dateTo** | **String**| To date | Use format: YYYY-MM-DD | [optional] 
 **verticalCollection** | [**[String]**](String.md)| List of verticals comma separated | [optional] 
 **categoryCollection** | [**[String]**](String.md)| List of categories comma separated | [optional] 
 **countryCollection** | [**[String]**](String.md)| List of countries comma separated | [optional] 
 **cityCollection** | [**[String]**](String.md)| List of cities comma separated | [optional] 
 **minPrice** | **String**| Minimum price for an event to be considered | [optional] 
 **maxPrice** | **String**| Maximum price for an event to be considered | [optional] 
 **topFeature** | **String**| Query String | [optional] 
 **sorting** | **String**| Sorting strategy | [optional] [default to relevance]

### Return type

[**SearchResponse**](SearchResponse.md)

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

var apiInstance = new MusementApi.EventApi();

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

<a name="venuesVenueIdEventsGet"></a>
# **venuesVenueIdEventsGet**
> [Event] venuesVenueIdEventsGet(venueId, opts)

Get all events for a venue sorted by venue relevance.

Get all events for an venue sorted by relevance. Only the events that have at least one active date in the period specified between date_from and date_to are returned. If date_from and date_to are not set then the period that will be set will be one year from the date of the request&#39;

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EventApi();

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

