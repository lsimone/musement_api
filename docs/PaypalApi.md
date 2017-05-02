# MusementApi.PaypalApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentsPaypalPaymentPost**](PaypalApi.md#paymentsPaypalPaymentPost) | **POST** /payments/paypal/payment | Pay an Order.


<a name="paymentsPaypalPaymentPost"></a>
# **paymentsPaypalPaymentPost**
> SuccessfulPayment paymentsPaypalPaymentPost(paypalPayment)

Pay an Order.

Pay an Order using Paypal.

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.PaypalApi();

var paypalPayment = new MusementApi.PaypalPaymentRequest(); // PaypalPaymentRequest | Paypal payment info request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentsPaypalPaymentPost(paypalPayment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paypalPayment** | [**PaypalPaymentRequest**](PaypalPaymentRequest.md)| Paypal payment info request | 

### Return type

[**SuccessfulPayment**](SuccessfulPayment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

