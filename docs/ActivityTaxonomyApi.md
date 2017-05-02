# MusementApi.ActivityTaxonomyApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activityTaxonomiesFeaturesGet**](ActivityTaxonomyApi.md#activityTaxonomiesFeaturesGet) | **GET** /activity-taxonomies/features | Get all feature taxonomies
[**activityTaxonomiesHighlightsGet**](ActivityTaxonomyApi.md#activityTaxonomiesHighlightsGet) | **GET** /activity-taxonomies/highlights | Get all highlight taxonomies


<a name="activityTaxonomiesFeaturesGet"></a>
# **activityTaxonomiesFeaturesGet**
> ActivityTaxonomy activityTaxonomiesFeaturesGet(opts)

Get all feature taxonomies

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ActivityTaxonomyApi();

var opts = { 
  'category': 56, // Number | Category identifier
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
apiInstance.activityTaxonomiesFeaturesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **Number**| Category identifier | [optional] 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**ActivityTaxonomy**](ActivityTaxonomy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="activityTaxonomiesHighlightsGet"></a>
# **activityTaxonomiesHighlightsGet**
> ActivityTaxonomy activityTaxonomiesHighlightsGet(opts)

Get all highlight taxonomies

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ActivityTaxonomyApi();

var opts = { 
  'category': 56, // Number | Category identifier
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
apiInstance.activityTaxonomiesHighlightsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **Number**| Category identifier | [optional] 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**ActivityTaxonomy**](ActivityTaxonomy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

