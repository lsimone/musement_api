# MusementApi.CategoryApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriesCategoryIdEventsGet**](CategoryApi.md#categoriesCategoryIdEventsGet) | **GET** /categories/{categoryId}/events | Get events for a category sorted by category relevance.
[**categoriesCategoryIdGet**](CategoryApi.md#categoriesCategoryIdGet) | **GET** /categories/{categoryId} | Get a category by identifier
[**categoriesGet**](CategoryApi.md#categoriesGet) | **GET** /categories | Get categories
[**citiesCityIdCategoriesGet**](CategoryApi.md#citiesCityIdCategoriesGet) | **GET** /cities/{cityId}/categories | Categories for the city. Sorted by the number of events for the category


<a name="categoriesCategoryIdEventsGet"></a>
# **categoriesCategoryIdEventsGet**
> [Event] categoriesCategoryIdEventsGet(categoryId, opts)

Get events for a category sorted by category relevance.

Get all events for a category sorted by category relevance. Only the events that have at least one active date in the period specified between date_from and date_to are returned. If date_from and date_to are not set then the period that will be set will be one year from the date of the request&#39;

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CategoryApi();

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

<a name="categoriesCategoryIdGet"></a>
# **categoriesCategoryIdGet**
> Category categoriesCategoryIdGet(categoryId)

Get a category by identifier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CategoryApi();

var categoryId = 56; // Number | Category identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.categoriesCategoryIdGet(categoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**| Category identifier | 

### Return type

[**Category**](Category.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="categoriesGet"></a>
# **categoriesGet**
> [Category] categoriesGet(opts)

Get categories

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CategoryApi();

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
apiInstance.categoriesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**[Category]**](Category.md)

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

var apiInstance = new MusementApi.CategoryApi();

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

