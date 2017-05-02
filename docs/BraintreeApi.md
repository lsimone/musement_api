# MusementApi.BraintreeApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentsBraintreePaymentPost**](BraintreeApi.md#paymentsBraintreePaymentPost) | **POST** /payments/braintree/payment | Pay an order.
[**paymentsBraintreeTokenPost**](BraintreeApi.md#paymentsBraintreeTokenPost) | **POST** /payments/braintree/token | Create Braintree clientToken


<a name="paymentsBraintreePaymentPost"></a>
# **paymentsBraintreePaymentPost**
> ResponseWithMessage paymentsBraintreePaymentPost(braintreePayment)

Pay an order.

Pay an order using braintree.

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BraintreeApi();

var braintreePayment = new MusementApi.BraintreePaymentRequest(); // BraintreePaymentRequest | Braintree payment info request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentsBraintreePaymentPost(braintreePayment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **braintreePayment** | [**BraintreePaymentRequest**](BraintreePaymentRequest.md)| Braintree payment info request | 

### Return type

[**ResponseWithMessage**](ResponseWithMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="paymentsBraintreeTokenPost"></a>
# **paymentsBraintreeTokenPost**
> PostClientToken paymentsBraintreeTokenPost()

Create Braintree clientToken

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.BraintreeApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentsBraintreeTokenPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PostClientToken**](PostClientToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

