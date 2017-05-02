# MusementApi.SecurityApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentManagersMeGet**](SecurityApi.md#contentManagersMeGet) | **GET** /content-managers/me | Get logged content manager data
[**customersMeGet**](SecurityApi.md#customersMeGet) | **GET** /customers/me | Get logged user data
[**loginGet**](SecurityApi.md#loginGet) | **GET** /login | Login a user via OAuth 2
[**refreshGet**](SecurityApi.md#refreshGet) | **GET** /refresh | Retrieve a fresh access token
[**resetPasswordPost**](SecurityApi.md#resetPasswordPost) | **POST** /reset_password | Send reset password email. This method always returns 204
[**signupExternalProviderPost**](SecurityApi.md#signupExternalProviderPost) | **POST** /signup/external_provider | Register a new customer using external provider data
[**signupPost**](SecurityApi.md#signupPost) | **POST** /signup | Begin a new signup process
[**signupSoftPost**](SecurityApi.md#signupSoftPost) | **POST** /signup/soft | Register a new customer setting the softpassword
[**suppliersMeActivitiesGet**](SecurityApi.md#suppliersMeActivitiesGet) | **GET** /suppliers/me/activities | Get activities for the logged in supplier
[**suppliersMeGet**](SecurityApi.md#suppliersMeGet) | **GET** /suppliers/me | Get logged supplier data
[**suppliersMePriceFeaturesGet**](SecurityApi.md#suppliersMePriceFeaturesGet) | **GET** /suppliers/me/price-features | Get all available price features for the logged in supplier
[**suppliersMeTicketHoldersGet**](SecurityApi.md#suppliersMeTicketHoldersGet) | **GET** /suppliers/me/ticket-holders | Get all available ticket holders features for the logged in supplier


<a name="contentManagersMeGet"></a>
# **contentManagersMeGet**
> ContentManager contentManagersMeGet()

Get logged content manager data

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentManagersMeGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ContentManager**](ContentManager.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="customersMeGet"></a>
# **customersMeGet**
> Customer customersMeGet()

Get logged user data

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.customersMeGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="loginGet"></a>
# **loginGet**
> loginGet()

Login a user via OAuth 2

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.loginGet(callback);
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

<a name="refreshGet"></a>
# **refreshGet**
> refreshGet()

Retrieve a fresh access token

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.refreshGet(callback);
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

<a name="resetPasswordPost"></a>
# **resetPasswordPost**
> resetPasswordPost(email)

Send reset password email. This method always returns 204

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var email = "email_example"; // String | Email address of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.resetPasswordPost(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address of the user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="signupExternalProviderPost"></a>
# **signupExternalProviderPost**
> Customer signupExternalProviderPost()

Register a new customer using external provider data

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.signupExternalProviderPost(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Customer**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="signupPost"></a>
# **signupPost**
> signupPost()

Begin a new signup process

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.signupPost(callback);
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

<a name="signupSoftPost"></a>
# **signupSoftPost**
> signupSoftPost()

Register a new customer setting the softpassword

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.signupSoftPost(callback);
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

<a name="suppliersMeActivitiesGet"></a>
# **suppliersMeActivitiesGet**
> [Event] suppliersMeActivitiesGet(opts)

Get activities for the logged in supplier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var opts = { 
  'offset': 0, // Number | Pagination offset
  'limit': 10 // Number | Max number of items in the response
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersMeActivitiesGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Pagination offset | [optional] [default to 0]
 **limit** | **Number**| Max number of items in the response | [optional] [default to 10]

### Return type

[**[Event]**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="suppliersMeGet"></a>
# **suppliersMeGet**
> Supplier suppliersMeGet()

Get logged supplier data

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersMeGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Supplier**](Supplier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml, application/json
 - **Accept**: application/xml, application/json

<a name="suppliersMePriceFeaturesGet"></a>
# **suppliersMePriceFeaturesGet**
> [TranslatedMetadata] suppliersMePriceFeaturesGet()

Get all available price features for the logged in supplier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersMePriceFeaturesGet(callback);
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

<a name="suppliersMeTicketHoldersGet"></a>
# **suppliersMeTicketHoldersGet**
> [TranslatedMetadata] suppliersMeTicketHoldersGet()

Get all available ticket holders features for the logged in supplier

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.suppliersMeTicketHoldersGet(callback);
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

