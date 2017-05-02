# MusementApi.StripeApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentsStripeComplete3dSecurePost**](StripeApi.md#paymentsStripeComplete3dSecurePost) | **POST** /payments/stripe/complete_3d_secure | Complete 3d secure payment.
[**paymentsStripePaymentPost**](StripeApi.md#paymentsStripePaymentPost) | **POST** /payments/stripe/payment | Pay an order.
[**paymentsStripeStoredSourceInfoGet**](StripeApi.md#paymentsStripeStoredSourceInfoGet) | **GET** /payments/stripe/stored_source_info | Get stored Stripe Source info


<a name="paymentsStripeComplete3dSecurePost"></a>
# **paymentsStripeComplete3dSecurePost**
> SuccessfulPayment paymentsStripeComplete3dSecurePost()

Complete 3d secure payment.

Complete 3d secure payment after confirming it on card issuer page.

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.StripeApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentsStripeComplete3dSecurePost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SuccessfulPayment**](SuccessfulPayment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="paymentsStripePaymentPost"></a>
# **paymentsStripePaymentPost**
> SuccessfulPayment paymentsStripePaymentPost(stripePayment)

Pay an order.

Pay an order using stripe.

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.StripeApi();

var stripePayment = new MusementApi.StripePaymentRequest(); // StripePaymentRequest | Stripe payment info request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentsStripePaymentPost(stripePayment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stripePayment** | [**StripePaymentRequest**](StripePaymentRequest.md)| Stripe payment info request | 

### Return type

[**SuccessfulPayment**](SuccessfulPayment.md)

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

var apiInstance = new MusementApi.StripeApi();

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

