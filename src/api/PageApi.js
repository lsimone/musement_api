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
    define(['ApiClient', 'model/Page'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Page'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.PageApi = factory(root.MusementApi.ApiClient, root.MusementApi.Page);
  }
}(this, function(ApiClient, Page) {
  'use strict';

  /**
   * Page service.
   * @module api/PageApi
   * @version 3.2.0
   */

  /**
   * Constructs a new PageApi. 
   * @alias module:api/PageApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the pagesIdGet operation.
     * @callback module:api/PageApi~pagesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Page} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get page by ID
     * @param {Number} id Page identifier
     * @param {module:api/PageApi~pagesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Page}
     */
    this.pagesIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling pagesIdGet");
      }


      var pathParams = {
        'id': id
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
      var returnType = Page;

      return this.apiClient.callApi(
        '/pages/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
