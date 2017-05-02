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
    define(['ApiClient', 'model/Bundle'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Bundle'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.CartBundleApi = factory(root.MusementApi.ApiClient, root.MusementApi.Bundle);
  }
}(this, function(ApiClient, Bundle) {
  'use strict';

  /**
   * CartBundle service.
   * @module api/CartBundleApi
   * @version 3.2.0
   */

  /**
   * Constructs a new CartBundleApi. 
   * @alias module:api/CartBundleApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cartsCartIdBundlesGet operation.
     * @callback module:api/CartBundleApi~cartsCartIdBundlesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Bundle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the bundle in a cart
     * @param {Number} cartId Cart identifier
     * @param {module:api/CartBundleApi~cartsCartIdBundlesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Bundle}
     */
    this.cartsCartIdBundlesGet = function(cartId, callback) {
      var postBody = null;

      // verify the required parameter 'cartId' is set
      if (cartId == undefined || cartId == null) {
        throw new Error("Missing the required parameter 'cartId' when calling cartsCartIdBundlesGet");
      }


      var pathParams = {
        'cartId': cartId
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
      var returnType = Bundle;

      return this.apiClient.callApi(
        '/carts/{cartId}/bundles', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));