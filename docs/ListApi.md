# MusementApi.ListApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**citiesCityIdListsGet**](ListApi.md#citiesCityIdListsGet) | **GET** /cities/{cityId}/lists | Get lists for a city
[**citiesCityIdListsListIdDestinationsPost**](ListApi.md#citiesCityIdListsListIdDestinationsPost) | **POST** /cities/{city_id}/lists/{list_id}/destinations | Add a thirdparty destination to a list. If the destination is already present in the list increments the votes
[**listTypesGet**](ListApi.md#listTypesGet) | **GET** /list-types | Get all List types
[**listsGet**](ListApi.md#listsGet) | **GET** /lists | Get all lists
[**listsIdGet**](ListApi.md#listsIdGet) | **GET** /lists/{id} | Get list by ID


<a name="citiesCityIdListsGet"></a>
# **citiesCityIdListsGet**
> [MusementList] citiesCityIdListsGet(cityId, opts)

Get lists for a city

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ListApi();

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

<a name="citiesCityIdListsListIdDestinationsPost"></a>
# **citiesCityIdListsListIdDestinationsPost**
> citiesCityIdListsListIdDestinationsPost(cityId, listId, provider, providerIdentifier)

Add a thirdparty destination to a list. If the destination is already present in the list increments the votes

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ListApi();

var cityId = 56; // Number | 

var listId = 56; // Number | 

var provider = "provider_example"; // String | 

var providerIdentifier = "providerIdentifier_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.citiesCityIdListsListIdDestinationsPost(cityId, listId, provider, providerIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**|  | 
 **listId** | **Number**|  | 
 **provider** | **String**|  | 
 **providerIdentifier** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="listTypesGet"></a>
# **listTypesGet**
> ListType listTypesGet(opts)

Get all List types

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ListApi();

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
apiInstance.listTypesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**ListType**](ListType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="listsGet"></a>
# **listsGet**
> MusementList listsGet(opts)

Get all lists

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ListApi();

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
apiInstance.listsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**MusementList**](MusementList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="listsIdGet"></a>
# **listsIdGet**
> MusementList listsIdGet(id)

Get list by ID

### Example
```javascript
var MusementApi = require('musement_api');
var defaultClient = MusementApi.ApiClient.default;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new MusementApi.ListApi();

var id = 56; // Number | List identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| List identifier | 

### Return type

[**MusementList**](MusementList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

