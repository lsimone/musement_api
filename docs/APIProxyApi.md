# MusementApi.APIProxyApi

All URIs are relative to *https://developers.musement.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**proxyAuthClientPost**](APIProxyApi.md#proxyAuthClientPost) | **POST** /proxy/auth/client | POST Login using client_credentials grant type
[**proxyAuthUserPost**](APIProxyApi.md#proxyAuthUserPost) | **POST** /proxy/auth/user | POST Login using password grant type


<a name="proxyAuthClientPost"></a>
# **proxyAuthClientPost**
> proxyAuthClientPost()

POST Login using client_credentials grant type

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.APIProxyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.proxyAuthClientPost(callback);
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

<a name="proxyAuthUserPost"></a>
# **proxyAuthUserPost**
> proxyAuthUserPost()

POST Login using password grant type

### Example
```javascript
var MusementApi = require('musement_api');

var apiInstance = new MusementApi.APIProxyApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.proxyAuthUserPost(callback);
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

