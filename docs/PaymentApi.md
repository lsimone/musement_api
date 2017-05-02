# MusementApi.PaymentApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentsBraintreeTokenPost**](PaymentApi.md#paymentsBraintreeTokenPost) | **POST** /payments/braintree/token | Create Braintree clientToken
[**paymentsStripeStoredSourceInfoGet**](PaymentApi.md#paymentsStripeStoredSourceInfoGet) | **GET** /payments/stripe/stored_source_info | Get stored Stripe Source info


<a name="paymentsBraintreeTokenPost"></a>
# **paymentsBraintreeTokenPost**
> PostClientToken paymentsBraintreeTokenPost()

Create Braintree clientToken

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.PaymentApi();

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

<a name="paymentsStripeStoredSourceInfoGet"></a>
# **paymentsStripeStoredSourceInfoGet**
> paymentsStripeStoredSourceInfoGet()

Get stored Stripe Source info

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.PaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.paymentsStripeStoredSourceInfoGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

