# MusementApi.VerticalApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**citiesCityIdVerticalsGet**](VerticalApi.md#citiesCityIdVerticalsGet) | **GET** /cities/{cityId}/verticals | Get all verticals for a city
[**verticalsGet**](VerticalApi.md#verticalsGet) | **GET** /verticals | Get all verticals
[**verticalsVerticalIdCategoriesGet**](VerticalApi.md#verticalsVerticalIdCategoriesGet) | **GET** /verticals/{verticalId}/categories | Get categories by vertical ID
[**verticalsVerticalIdEventsGet**](VerticalApi.md#verticalsVerticalIdEventsGet) | **GET** /verticals/{verticalId}/events | Get all events for by vertical ID


<a name="citiesCityIdVerticalsGet"></a>
# **citiesCityIdVerticalsGet**
> [Vertical] citiesCityIdVerticalsGet(cityId)

Get all verticals for a city

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.VerticalApi();

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

<a name="verticalsGet"></a>
# **verticalsGet**
> verticalsGet(opts)

Get all verticals

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.VerticalApi();

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.verticalsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="verticalsVerticalIdCategoriesGet"></a>
# **verticalsVerticalIdCategoriesGet**
> verticalsVerticalIdCategoriesGet(verticalId, opts)

Get categories by vertical ID

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.VerticalApi();

var verticalId = 56; // Number | Vertical identifier

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.verticalsVerticalIdCategoriesGet(verticalId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verticalId** | **Number**| Vertical identifier | 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="verticalsVerticalIdEventsGet"></a>
# **verticalsVerticalIdEventsGet**
> verticalsVerticalIdEventsGet(verticalId, opts)

Get all events for by vertical ID

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.VerticalApi();

var verticalId = 56; // Number | Vertical identifier

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.verticalsVerticalIdEventsGet(verticalId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verticalId** | **Number**| Vertical identifier | 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

