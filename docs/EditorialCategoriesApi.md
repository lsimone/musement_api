# MusementApi.EditorialCategoriesApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editorialCategoriesEditorialcategoryIdFlavoursGet**](EditorialCategoriesApi.md#editorialCategoriesEditorialcategoryIdFlavoursGet) | **GET** /editorial-categories/{editorialcategoryId}/flavours | Get all flavours connected to an editorial category


<a name="editorialCategoriesEditorialcategoryIdFlavoursGet"></a>
# **editorialCategoriesEditorialcategoryIdFlavoursGet**
> Flavour editorialCategoriesEditorialcategoryIdFlavoursGet(editorialcategoryId)

Get all flavours connected to an editorial category

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.EditorialCategoriesApi();

var editorialcategoryId = 56; // Number | Editorial category identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editorialCategoriesEditorialcategoryIdFlavoursGet(editorialcategoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **editorialcategoryId** | **Number**| Editorial category identifier | 

### Return type

[**Flavour**](Flavour.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

