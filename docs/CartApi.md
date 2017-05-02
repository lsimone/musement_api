# MusementApi.CartApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cartsCartIdDelete**](CartApi.md#cartsCartIdDelete) | **DELETE** /carts/{cartId} | Delete a Cart
[**cartsCartIdFormGet**](CartApi.md#cartsCartIdFormGet) | **GET** /carts/{cartId}/form | Get the form associated to a cart
[**cartsCartIdGet**](CartApi.md#cartsCartIdGet) | **GET** /carts/{cartId} | Get a cart by unique identifier
[**cartsCartIdGiftsGiftCodePut**](CartApi.md#cartsCartIdGiftsGiftCodePut) | **PUT** /carts/{cartId}/gifts/{giftCode} | Redeem gift code with chosen date+time+language. Appropriate Tickets with price 0 will be added to Cart
[**cartsCartIdGiftsPost**](CartApi.md#cartsCartIdGiftsPost) | **POST** /carts/{cartId}/gifts | Create tailored Gift and add it to Cart
[**cartsCartIdPatch**](CartApi.md#cartsCartIdPatch) | **PATCH** /carts/{cartId} | Update a Cart
[**cartsCartIdPut**](CartApi.md#cartsCartIdPut) | **PUT** /carts/{cartId} | Replace a Cart
[**cartsIdTicketsPost**](CartApi.md#cartsIdTicketsPost) | **POST** /carts/{id}/tickets | Add tickets to a cart
[**cartsIdTicketsTicketIdDelete**](CartApi.md#cartsIdTicketsTicketIdDelete) | **DELETE** /carts/{id}/tickets/{ticketId} | Delete a ticket by ID
[**cartsPost**](CartApi.md#cartsPost) | **POST** /carts | Create a cart


<a name="cartsCartIdDelete"></a>
# **cartsCartIdDelete**
> cartsCartIdDelete(cartId)

Delete a Cart

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var cartId = 56; // Number | Cart identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cartsCartIdDelete(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| Cart identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="cartsCartIdFormGet"></a>
# **cartsCartIdFormGet**
> cartsCartIdFormGet(cartId)

Get the form associated to a cart

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var cartId = 56; // Number | Cart identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.cartsCartIdFormGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| Cart identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="cartsCartIdGet"></a>
# **cartsCartIdGet**
> Cart cartsCartIdGet(cartId)

Get a cart by unique identifier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var cartId = 56; // Number | Cart identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartsCartIdGet(cartId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| Cart identifier | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="cartsCartIdGiftsGiftCodePut"></a>
# **cartsCartIdGiftsGiftCodePut**
> ResponseWithMessage cartsCartIdGiftsGiftCodePut(cartId, giftCode, giftRedeemRequest)

Redeem gift code with chosen date+time+language. Appropriate Tickets with price 0 will be added to Cart

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var cartId = 56; // Number | Cart Id

var giftCode = "giftCode_example"; // String | Gift code

var giftRedeemRequest = new MusementApi.GiftRedeemRequest(); // GiftRedeemRequest | Gift redeem request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartsCartIdGiftsGiftCodePut(cartId, giftCode, giftRedeemRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| Cart Id | 
 **giftCode** | **String**| Gift code | 
 **giftRedeemRequest** | [**GiftRedeemRequest**](GiftRedeemRequest.md)| Gift redeem request | 

### Return type

[**ResponseWithMessage**](ResponseWithMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="cartsCartIdGiftsPost"></a>
# **cartsCartIdGiftsPost**
> ResponseWithMessage cartsCartIdGiftsPost(cartId, giftCreationRequest)

Create tailored Gift and add it to Cart

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var cartId = 56; // Number | Cart Id

var giftCreationRequest = new MusementApi.GiftCreationRequest(); // GiftCreationRequest | Gift creation request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartsCartIdGiftsPost(cartId, giftCreationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| Cart Id | 
 **giftCreationRequest** | [**GiftCreationRequest**](GiftCreationRequest.md)| Gift creation request | 

### Return type

[**ResponseWithMessage**](ResponseWithMessage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="cartsCartIdPatch"></a>
# **cartsCartIdPatch**
> Cart cartsCartIdPatch(cartIdcart)

Update a Cart

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var cartId = 56; // Number | Cart identifier

var cart = new MusementApi.CartRequest(); // CartRequest | Cart request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartsCartIdPatch(cartIdcart, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| Cart identifier | 
 **cart** | [**CartRequest**](CartRequest.md)| Cart request | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="cartsCartIdPut"></a>
# **cartsCartIdPut**
> Cart cartsCartIdPut(cartIdcart)

Replace a Cart

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var cartId = 56; // Number | Cart identifier

var cart = new MusementApi.CartRequest(); // CartRequest | Cart request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartsCartIdPut(cartIdcart, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cartId** | **Number**| Cart identifier | 
 **cart** | [**CartRequest**](CartRequest.md)| Cart request | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="cartsIdTicketsPost"></a>
# **cartsIdTicketsPost**
> Cart cartsIdTicketsPost(id)

Add tickets to a cart

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var id = 56; // Number | Cart Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartsIdTicketsPost(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Cart Id | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="cartsIdTicketsTicketIdDelete"></a>
# **cartsIdTicketsTicketIdDelete**
> Ticket cartsIdTicketsTicketIdDelete(id, ticketId)

Delete a ticket by ID

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var id = 56; // Number | Cart Id

var ticketId = 56; // Number | Ticket Id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartsIdTicketsTicketIdDelete(id, ticketId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Cart Id | 
 **ticketId** | **Number**| Ticket Id | 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="cartsPost"></a>
# **cartsPost**
> Cart cartsPost(cart)

Create a cart

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.CartApi();

var cart = new MusementApi.CartRequest(); // CartRequest | Cart request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cartsPost(cart, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cart** | [**CartRequest**](CartRequest.md)| Cart request | 

### Return type

[**Cart**](Cart.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

