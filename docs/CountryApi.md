# MusementApi.CountryApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesCountryIdCitiesGet**](CountryApi.md#countriesCountryIdCitiesGet) | **GET** /countries/{countryId}/cities | Get all cities for a country
[**countriesCountryIdEventsGet**](CountryApi.md#countriesCountryIdEventsGet) | **GET** /countries/{countryId}/events | Get all events for a country
[**countriesCountryIdGet**](CountryApi.md#countriesCountryIdGet) | **GET** /countries/{countryId} | Get country by unique identifier
[**countriesGet**](CountryApi.md#countriesGet) | **GET** /countries | Get all countries


<a name="countriesCountryIdCitiesGet"></a>
# **countriesCountryIdCitiesGet**
> [CityAggregated] countriesCountryIdCitiesGet(countryId, opts)

Get all cities for a country

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CountryApi();

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

<a name="countriesCountryIdEventsGet"></a>
# **countriesCountryIdEventsGet**
> [Event] countriesCountryIdEventsGet(countryId, opts)

Get all events for a country

Get all events for a country sorted by relevance. If priority_city is specified the event for that city are returned first&#39;

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CountryApi();

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

<a name="countriesCountryIdGet"></a>
# **countriesCountryIdGet**
> countriesCountryIdGet(countryId)

Get country by unique identifier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CountryApi();

var countryId = 56; // Number | Country identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.countriesCountryIdGet(countryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryId** | **Number**| Country identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="countriesGet"></a>
# **countriesGet**
> [Country] countriesGet()

Get all countries

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CountryApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.countriesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Country]**](Country.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

