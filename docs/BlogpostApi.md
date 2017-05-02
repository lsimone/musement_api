# MusementApi.BlogpostApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**blogpostsCategoriesGet**](BlogpostApi.md#blogpostsCategoriesGet) | **GET** /blogposts-categories | Get all available blogpost categories
[**blogpostsCategoriesIdGet**](BlogpostApi.md#blogpostsCategoriesIdGet) | **GET** /blogposts-categories/{id} | Get a specific blogpost category
[**blogpostsGet**](BlogpostApi.md#blogpostsGet) | **GET** /blogposts | Get a blogposts
[**blogpostsIdGet**](BlogpostApi.md#blogpostsIdGet) | **GET** /blogposts/{id} | Get blogpost by identifier
[**blogpostsIdPositionGet**](BlogpostApi.md#blogpostsIdPositionGet) | **GET** /blogposts/{id}/{position} | Get previous o next blogposts
[**citiesCityIdBlogpostsGet**](BlogpostApi.md#citiesCityIdBlogpostsGet) | **GET** /cities/{cityId}/blogposts | Get the blogposts for the city


<a name="blogpostsCategoriesGet"></a>
# **blogpostsCategoriesGet**
> [BlogpostCategoryAggregated] blogpostsCategoriesGet()

Get all available blogpost categories

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BlogpostApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blogpostsCategoriesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[BlogpostCategoryAggregated]**](BlogpostCategoryAggregated.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="blogpostsCategoriesIdGet"></a>
# **blogpostsCategoriesIdGet**
> BlogpostCategory blogpostsCategoriesIdGet(id)

Get a specific blogpost category

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BlogpostApi();

var id = 56; // Number | Category identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blogpostsCategoriesIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Category identifier | 

### Return type

[**BlogpostCategory**](BlogpostCategory.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="blogpostsGet"></a>
# **blogpostsGet**
> [Blogpost] blogpostsGet(opts)

Get a blogposts

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BlogpostApi();

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
  'category': "category_example", // String | Category code
  'city': "city_example", // String | City identifier
  'sortBy': "publish-date" // String | Set sorting strategy
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blogpostsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]
 **category** | **String**| Category code | [optional] 
 **city** | **String**| City identifier | [optional] 
 **sortBy** | **String**| Set sorting strategy | [optional] [default to publish-date]

### Return type

[**[Blogpost]**](Blogpost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="blogpostsIdGet"></a>
# **blogpostsIdGet**
> Blogpost blogpostsIdGet(id)

Get blogpost by identifier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BlogpostApi();

var id = "id_example"; // String | Blogpost unique identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blogpostsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Blogpost unique identifier | 

### Return type

[**Blogpost**](Blogpost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="blogpostsIdPositionGet"></a>
# **blogpostsIdPositionGet**
> Blogpost blogpostsIdPositionGet(id, position)

Get previous o next blogposts

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BlogpostApi();

var id = "id_example"; // String | Blogpost unique identifier

var position = "position_example"; // String | Indicate if you want the prev or the next post


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.blogpostsIdPositionGet(id, position, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Blogpost unique identifier | 
 **position** | **String**| Indicate if you want the prev or the next post | 

### Return type

[**Blogpost**](Blogpost.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="citiesCityIdBlogpostsGet"></a>
# **citiesCityIdBlogpostsGet**
> citiesCityIdBlogpostsGet(cityId)

Get the blogposts for the city

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BlogpostApi();

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

