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
    define(['ApiClient', 'model/Destination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Destination'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.DestinationApi = factory(root.MusementApi.ApiClient, root.MusementApi.Destination);
  }
}(this, function(ApiClient, Destination) {
  'use strict';

  /**
   * Destination service.
   * @module api/DestinationApi
   * @version 3.2.0
   */

  /**
   * Constructs a new DestinationApi. 
   * @alias module:api/DestinationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the destinationsDestinationIdGet operation.
     * @callback module:api/DestinationApi~destinationsDestinationIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Destination} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get destination by unique identifier
     * @param {Number} destinationId Destination identifier
     * @param {module:api/DestinationApi~destinationsDestinationIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Destination}
     */
    this.destinationsDestinationIdGet = function(destinationId, callback) {
      var postBody = null;

      // verify the required parameter 'destinationId' is set
      if (destinationId == undefined || destinationId == null) {
        throw new Error("Missing the required parameter 'destinationId' when calling destinationsDestinationIdGet");
      }


      var pathParams = {
        'destinationId': destinationId
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
      var returnType = Destination;

      return this.apiClient.callApi(
        '/destinations/{destinationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
