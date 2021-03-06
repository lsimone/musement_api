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
    define(['ApiClient', 'model/BraintreePaymentRequest', 'model/PostClientToken', 'model/ResponseWithMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BraintreePaymentRequest'), require('../model/PostClientToken'), require('../model/ResponseWithMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.BraintreeApi = factory(root.MusementApi.ApiClient, root.MusementApi.BraintreePaymentRequest, root.MusementApi.PostClientToken, root.MusementApi.ResponseWithMessage);
  }
}(this, function(ApiClient, BraintreePaymentRequest, PostClientToken, ResponseWithMessage) {
  'use strict';

  /**
   * Braintree service.
   * @module api/BraintreeApi
   * @version 3.2.0
   */

  /**
   * Constructs a new BraintreeApi. 
   * @alias module:api/BraintreeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the paymentsBraintreePaymentPost operation.
     * @callback module:api/BraintreeApi~paymentsBraintreePaymentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseWithMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pay an order.
     * Pay an order using braintree.
     * @param {module:model/BraintreePaymentRequest} braintreePayment Braintree payment info request
     * @param {module:api/BraintreeApi~paymentsBraintreePaymentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseWithMessage}
     */
    this.paymentsBraintreePaymentPost = function(braintreePayment, callback) {
      var postBody = braintreePayment;

      // verify the required parameter 'braintreePayment' is set
      if (braintreePayment == undefined || braintreePayment == null) {
        throw new Error("Missing the required parameter 'braintreePayment' when calling paymentsBraintreePaymentPost");
      }


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
      var returnType = ResponseWithMessage;

      return this.apiClient.callApi(
        '/payments/braintree/payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentsBraintreeTokenPost operation.
     * @callback module:api/BraintreeApi~paymentsBraintreeTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostClientToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Braintree clientToken
     * @param {module:api/BraintreeApi~paymentsBraintreeTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
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
  };

  return exports;
}));
