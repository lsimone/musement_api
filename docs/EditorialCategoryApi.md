# MusementApi.EditorialCategoryApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editorialCategoriesEditorialcategoryIdEventsGet**](EditorialCategoryApi.md#editorialCategoriesEditorialcategoryIdEventsGet) | **GET** /editorial-categories/{editorialcategoryId}/events | Get all events for an editorial category sorted by event relevance.
[**editorialCategoriesEditorialcategoryIdGet**](EditorialCategoryApi.md#editorialCategoriesEditorialcategoryIdGet) | **GET** /editorial-categories/{editorialcategoryId} | Get an editorial category by ID
[**editorialCategoriesGet**](EditorialCategoryApi.md#editorialCategoriesGet) | **GET** /editorial-categories | Get all editorial categories


<a name="editorialCategoriesEditorialcategoryIdEventsGet"></a>
# **editorialCategoriesEditorialcategoryIdEventsGet**
> [Event] editorialCategoriesEditorialcategoryIdEventsGet(editorialcategoryId, opts)

Get all events for an editorial category sorted by event relevance.

Get all events for an editorial category sorted by relevance. Only the events that have at least one active date in the period specified between date_from and date_to are returned. If date_from and date_to are not set then the period that will be set will be one year from the date of the request&#39;

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EditorialCategoryApi();

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

<a name="editorialCategoriesEditorialcategoryIdGet"></a>
# **editorialCategoriesEditorialcategoryIdGet**
> EditorialCategory editorialCategoriesEditorialcategoryIdGet(editorialcategoryId)

Get an editorial category by ID

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EditorialCategoryApi();

var editorialcategoryId = 56; // Number | Editorial category identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorialCategoriesEditorialcategoryIdGet(editorialcategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editorialcategoryId** | **Number**| Editorial category identifier | 

### Return type

[**EditorialCategory**](EditorialCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="editorialCategoriesGet"></a>
# **editorialCategoriesGet**
> [EditorialCategory] editorialCategoriesGet(opts)

Get all editorial categories

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EditorialCategoryApi();

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
apiInstance.editorialCategoriesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**[EditorialCategory]**](EditorialCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

