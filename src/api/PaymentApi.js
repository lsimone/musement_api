/**
 * Musement API
 * Musmement API
 *
 * OpenAPI spec version: 3.2.0
 * Contact: api-support@musement.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PostClientToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PostClientToken'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.PaymentApi = factory(root.MusementApi.ApiClient, root.MusementApi.PostClientToken);
  }
}(this, function(ApiClient, PostClientToken) {
  'use strict';

  /**
   * Payment service.
   * @module api/PaymentApi
   * @version 3.2.0
   */

  /**
   * Constructs a new PaymentApi. 
   * @alias module:api/PaymentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the paymentsBraintreeTokenPost operation.
     * @callback module:api/PaymentApi~paymentsBraintreeTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostClientToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Braintree clientToken
     * @param {module:api/PaymentApi~paymentsBraintreeTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostClientToken}
     */
    this.paymentsBraintreeTokenPost = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = PostClientToken;

      return this.apiClient.callApi(
        '/payments/braintree/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentsStripeStoredSourceInfoGet operation.
     * @callback module:api/PaymentApi~paymentsStripeStoredSourceInfoGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get stored Stripe Source info
     * @param {module:api/PaymentApi~paymentsStripeStoredSourceInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.paymentsStripeStoredSourceInfoGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/payments/stripe/stored_source_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));