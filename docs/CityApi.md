# MusementApi.CityApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**citiesCityIdBlogpostsGet**](CityApi.md#citiesCityIdBlogpostsGet) | **GET** /cities/{cityId}/blogposts | Get the blogposts for the city
[**citiesCityIdCategoriesGet**](CityApi.md#citiesCityIdCategoriesGet) | **GET** /cities/{cityId}/categories | Categories for the city. Sorted by the number of events for the category
[**citiesCityIdEventsGet**](CityApi.md#citiesCityIdEventsGet) | **GET** /cities/{cityId}/events | Get all verticals for a city
[**citiesCityIdEventsHappeningGet**](CityApi.md#citiesCityIdEventsHappeningGet) | **GET** /cities/{cityId}/events/{happening} | Get events
[**citiesCityIdGet**](CityApi.md#citiesCityIdGet) | **GET** /cities/{cityId} | Get city by unique identifier
[**citiesCityIdListsGet**](CityApi.md#citiesCityIdListsGet) | **GET** /cities/{cityId}/lists | Get lists for a city
[**citiesCityIdVerticalsGet**](CityApi.md#citiesCityIdVerticalsGet) | **GET** /cities/{cityId}/verticals | Get all verticals for a city
[**citiesGet**](CityApi.md#citiesGet) | **GET** /cities | Get cities
[**countriesCountryIdCitiesGet**](CityApi.md#countriesCountryIdCitiesGet) | **GET** /countries/{countryId}/cities | Get all cities for a country


<a name="citiesCityIdBlogpostsGet"></a>
# **citiesCityIdBlogpostsGet**
> citiesCityIdBlogpostsGet(cityId)

Get the blogposts for the city

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CityApi();

var cityId = 56; // Number | City identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.citiesCityIdBlogpostsGet(cityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**| City identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="citiesCityIdCategoriesGet"></a>
# **citiesCityIdCategoriesGet**
> citiesCityIdCategoriesGet(cityId)

Categories for the city. Sorted by the number of events for the category

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CityApi();

var cityId = 56; // Number | City identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.citiesCityIdCategoriesGet(cityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**| City identifier | 

### Return type

null (empty response body)

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

var apiInstance = new MusementApi.CityApi();

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

var apiInstance = new MusementApi.CityApi();

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

<a name="citiesCityIdGet"></a>
# **citiesCityIdGet**
> City citiesCityIdGet(cityId)

Get city by unique identifier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CityApi();

var cityId = 56; // Number | City identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.citiesCityIdGet(cityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**| City identifier | 

### Return type

[**City**](City.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="citiesCityIdListsGet"></a>
# **citiesCityIdListsGet**
> [MusementList] citiesCityIdListsGet(cityId, opts)

Get lists for a city

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CityApi();

var cityId = 56; // Number | City identifier

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
  'sortBy': "weight", // String | Set sorting strategy
  'withoutEvents': "no", // String | Set to 'yes' return all cities otherwise only those with events
  'tag': ["tag_example"], // [String] | List tags to filter by
  'listTypes': ["listTypes_example"] // [String] | List type to filter by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.citiesCityIdListsGet(cityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**| City identifier | 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]
 **sortBy** | **String**| Set sorting strategy | [optional] [default to weight]
 **withoutEvents** | **String**| Set to &#39;yes&#39; return all cities otherwise only those with events | [optional] [default to no]
 **tag** | [**[String]**](String.md)| List tags to filter by | [optional] 
 **listTypes** | [**[String]**](String.md)| List type to filter by | [optional] 

### Return type

[**[MusementList]**](MusementList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="citiesCityIdVerticalsGet"></a>
# **citiesCityIdVerticalsGet**
> [Vertical] citiesCityIdVerticalsGet(cityId)

Get all verticals for a city

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CityApi();

var cityId = 56; // Number | City identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.citiesCityIdVerticalsGet(cityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**| City identifier | 

### Return type

[**[Vertical]**](Vertical.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="citiesGet"></a>
# **citiesGet**
> [CityAggregated] citiesGet(opts)

Get cities

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CityApi();

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
  'prioritizedCountry': 56, // Number | Set the country to prioritize (id) (will affect results order)
  'prioritizedCountryCitiesLimit': 56, // Number | Set the number of cities to select from the country given in prioritized_country, if not given means unlimited
  'sortBy': "weight", // String | Set sorting strategy
  'withoutEvents': "no" // String | Set to 'yes' return all cities otherwise only those with events
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.citiesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]
 **prioritizedCountry** | **Number**| Set the country to prioritize (id) (will affect results order) | [optional] 
 **prioritizedCountryCitiesLimit** | **Number**| Set the number of cities to select from the country given in prioritized_country, if not given means unlimited | [optional] 
 **sortBy** | **String**| Set sorting strategy | [optional] [default to weight]
 **withoutEvents** | **String**| Set to &#39;yes&#39; return all cities otherwise only those with events | [optional] [default to no]

### Return type

[**[CityAggregated]**](CityAggregated.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="countriesCountryIdCitiesGet"></a>
# **countriesCountryIdCitiesGet**
> [CityAggregated] countriesCountryIdCitiesGet(countryId, opts)

Get all cities for a country

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CityApi();

var countryId = 56; // Number | Country identifier

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
apiInstance.countriesCountryIdCitiesGet(countryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryId** | **Number**| Country identifier | 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**[CityAggregated]**](CityAggregated.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

