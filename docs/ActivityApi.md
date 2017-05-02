# MusementApi.ActivityApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activitiesActivityUuidContentsLocaleCodeGet**](ActivityApi.md#activitiesActivityUuidContentsLocaleCodeGet) | **GET** /activities/{activityUuid}/contents/{localeCode} | Get activity content for a specific locale
[**activityLanguagesGet**](ActivityApi.md#activityLanguagesGet) | **GET** /activity-languages | Get all possible languages for the activities


<a name="activitiesActivityUuidContentsLocaleCodeGet"></a>
# **activitiesActivityUuidContentsLocaleCodeGet**
> ActivityContent activitiesActivityUuidContentsLocaleCodeGet(activityUuid, localeCode)

Get activity content for a specific locale

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ActivityApi();

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

<a name="activityLanguagesGet"></a>
# **activityLanguagesGet**
> [TranslatedMetadata] activityLanguagesGet()

Get all possible languages for the activities

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.ActivityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activityLanguagesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TranslatedMetadata]**](TranslatedMetadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

