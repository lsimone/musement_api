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
    define(['ApiClient', 'model/Customer', 'model/PatchCustomer', 'model/PutCustomer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Customer'), require('../model/PatchCustomer'), require('../model/PutCustomer'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.DefaultApi = factory(root.MusementApi.ApiClient, root.MusementApi.Customer, root.MusementApi.PatchCustomer, root.MusementApi.PutCustomer);
  }
}(this, function(ApiClient, Customer, PatchCustomer, PutCustomer) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 3.2.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the customersMePatch operation.
     * @callback module:api/DefaultApi~customersMePatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch some of the user data
     * @param {module:model/PatchCustomer} customer Customer patch request
     * @param {module:api/DefaultApi~customersMePatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customer}
     */
    this.customersMePatch = function(customer, callback) {
      var postBody = customer;

      // verify the required parameter 'customer' is set
      if (customer == undefined || customer == null) {
        throw new Error("Missing the required parameter 'customer' when calling customersMePatch");
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
      var returnType = Customer;

      return this.apiClient.callApi(
        '/customers/me', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the customersMePut operation.
     * @callback module:api/DefaultApi~customersMePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an user whole data
     * @param {module:model/PutCustomer} customer Customer put request
     * @param {module:api/DefaultApi~customersMePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customer}
     */
    this.customersMePut = function(customer, callback) {
      var postBody = customer;

      // verify the required parameter 'customer' is set
      if (customer == undefined || customer == null) {
        throw new Error("Missing the required parameter 'customer' when calling customersMePut");
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
      var returnType = Customer;

      return this.apiClient.callApi(
        '/customers/me', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
