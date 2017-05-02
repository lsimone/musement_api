# MusementApi.CurrenciesApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**currenciesGet**](CurrenciesApi.md#currenciesGet) | **GET** /currencies | Get all available currencies


<a name="currenciesGet"></a>
# **currenciesGet**
> Currency currenciesGet()

Get all available currencies

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CurrenciesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.currenciesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Currency**](Currency.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

