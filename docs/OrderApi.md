# MusementApi.OrderApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customersMeOrdersGet**](OrderApi.md#customersMeOrdersGet) | **GET** /customers/me/orders | Get all orders for the user logged in
[**customersMeOrdersOrderIdTicketsTicketIdGet**](OrderApi.md#customersMeOrdersOrderIdTicketsTicketIdGet) | **GET** /customers/me/orders/{order_id}/tickets/{ticket_id} | Get the details for a specific ticket
[**ordersOrderUuidGet**](OrderApi.md#ordersOrderUuidGet) | **GET** /orders/{orderUuid} | Get details for an order
[**ordersPost**](OrderApi.md#ordersPost) | **POST** /orders | Create an order
[**paymentsBraintreeTokenPost**](OrderApi.md#paymentsBraintreeTokenPost) | **POST** /payments/braintree/token | Create Braintree clientToken
[**paymentsNoPaymentPost**](OrderApi.md#paymentsNoPaymentPost) | **POST** /payments/no/payment | Apply the no-payment strategy.
[**paymentsStripeStoredSourceInfoGet**](OrderApi.md#paymentsStripeStoredSourceInfoGet) | **GET** /payments/stripe/stored_source_info | Get stored Stripe Source info


<a name="customersMeOrdersGet"></a>
# **customersMeOrdersGet**
> [Order] customersMeOrdersGet()

Get all orders for the user logged in

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.OrderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersMeOrdersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Order]**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="customersMeOrdersOrderIdTicketsTicketIdGet"></a>
# **customersMeOrdersOrderIdTicketsTicketIdGet**
> Order customersMeOrdersOrderIdTicketsTicketIdGet(orderId, ticketId)

Get the details for a specific ticket

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.OrderApi();

var orderId = 56; // Number | $order_id Order identifier

var ticketId = 56; // Number | $ticket_id Ticket identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersMeOrdersOrderIdTicketsTicketIdGet(orderId, ticketId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | **Number**| $order_id Order identifier | 
 **ticketId** | **Number**| $ticket_id Ticket identifier | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="ordersOrderUuidGet"></a>
# **ordersOrderUuidGet**
> Order ordersOrderUuidGet(orderUuid)

Get details for an order

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.OrderApi();

var orderUuid = "orderUuid_example"; // String | Order Uuid


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ordersOrderUuidGet(orderUuid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderUuid** | **String**| Order Uuid | 

### Return type

[**Order**](Order.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="ordersPost"></a>
# **ordersPost**
> ordersPost(opts)

Create an order

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.OrderApi();

var opts = { 
  'cartId': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.ordersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**|  | [optional] 

### Return type

null (empty response body)

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

var apiInstance = new MusementApi.OrderApi();

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

<a name="paymentsNoPaymentPost"></a>
# **paymentsNoPaymentPost**
> ResponseWithMessage paymentsNoPaymentPost()

Apply the no-payment strategy.

Apply the no-payment strategy for an order. You can use this strategy if the cart amount is zero or if you have the special &#x60;NoPaymentStrategy&#x60; grant

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.OrderApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentsNoPaymentPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResponseWithMessage**](ResponseWithMessage.md)

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

var apiInstance = new MusementApi.OrderApi();

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

