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
    define(['ApiClient', 'model/StripePaymentRequest', 'model/SuccessfulPayment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/StripePaymentRequest'), require('../model/SuccessfulPayment'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.StripeApi = factory(root.MusementApi.ApiClient, root.MusementApi.StripePaymentRequest, root.MusementApi.SuccessfulPayment);
  }
}(this, function(ApiClient, StripePaymentRequest, SuccessfulPayment) {
  'use strict';

  /**
   * Stripe service.
   * @module api/StripeApi
   * @version 3.2.0
   */

  /**
   * Constructs a new StripeApi. 
   * @alias module:api/StripeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the paymentsStripeComplete3dSecurePost operation.
     * @callback module:api/StripeApi~paymentsStripeComplete3dSecurePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulPayment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete 3d secure payment.
     * Complete 3d secure payment after confirming it on card issuer page.
     * @param {module:api/StripeApi~paymentsStripeComplete3dSecurePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulPayment}
     */
    this.paymentsStripeComplete3dSecurePost = function(callback) {
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
      var returnType = SuccessfulPayment;

      return this.apiClient.callApi(
        '/payments/stripe/complete_3d_secure', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentsStripePaymentPost operation.
     * @callback module:api/StripeApi~paymentsStripePaymentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessfulPayment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pay an order.
     * Pay an order using stripe.
     * @param {module:model/StripePaymentRequest} stripePayment Stripe payment info request
     * @param {module:api/StripeApi~paymentsStripePaymentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessfulPayment}
     */
    this.paymentsStripePaymentPost = function(stripePayment, callback) {
      var postBody = stripePayment;

      // verify the required parameter 'stripePayment' is set
      if (stripePayment == undefined || stripePayment == null) {
        throw new Error("Missing the required parameter 'stripePayment' when calling paymentsStripePaymentPost");
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
      var returnType = SuccessfulPayment;

      return this.apiClient.callApi(
        '/payments/stripe/payment', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the paymentsStripeStoredSourceInfoGet operation.
     * @callback module:api/StripeApi~paymentsStripeStoredSourceInfoGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get stored Stripe Source info
     * @param {module:api/StripeApi~paymentsStripeStoredSourceInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
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
