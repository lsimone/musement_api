# MusementApi.CityVenueApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**citiesCityIdVenuesGet**](CityVenueApi.md#citiesCityIdVenuesGet) | **GET** /cities/{cityId}/venues | Get venues for a city


<a name="citiesCityIdVenuesGet"></a>
# **citiesCityIdVenuesGet**
> [Venue] citiesCityIdVenuesGet(cityId, opts)

Get venues for a city

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CityVenueApi();

var cityId = 56; // Number | City identifier

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
  'vertical': 56, // Number | Vertical identifier
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.citiesCityIdVenuesGet(cityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cityId** | **Number**| City identifier | 
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]
 **vertical** | **Number**| Vertical identifier | [optional] 

### Return type

[**[Venue]**](Venue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

