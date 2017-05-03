# MusementApi.DefaultApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersMePatch**](DefaultApi.md#customersMePatch) | **PATCH** /customers/me | Patch some of the user data
[**customersMePut**](DefaultApi.md#customersMePut) | **PUT** /customers/me | Update an user whole data


<a name="customersMePatch"></a>
# **customersMePatch**
> Customer customersMePatch(customer)

Patch some of the user data

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.DefaultApi();

var customer = new MusementApi.PatchCustomer(); // PatchCustomer | Customer patch request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersMePatch(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [**PatchCustomer**](PatchCustomer.md)| Customer patch request | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="customersMePut"></a>
# **customersMePut**
> Customer customersMePut(customer)

Update an user whole data

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.DefaultApi();

var customer = new MusementApi.PutCustomer(); // PutCustomer | Customer put request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersMePut(customer, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customer** | [**PutCustomer**](PutCustomer.md)| Customer put request | 

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

