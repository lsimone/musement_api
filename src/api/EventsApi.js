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
    define(['ApiClient', 'model/Event'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.EventsApi = factory(root.MusementApi.ApiClient, root.MusementApi.Event);
  }
}(this, function(ApiClient, Event) {
  'use strict';

  /**
   * Events service.
   * @module api/EventsApi
   * @version 3.2.0
   */

  /**
   * Constructs a new EventsApi. 
   * @alias module:api/EventsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the countriesCountryIdEventsGet operation.
     * @callback module:api/EventsApi~countriesCountryIdEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all events for a country
     * Get all events for a country sorted by relevance. If priority_city is specified the event for that city are returned first&#39;
     * @param {Number} countryId Country identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.vertical Vertical identifier
     * @param {Number} opts.priorityCity Prioritize results that belong to this city
     * @param {Number} opts.offset Pagination offset (default to 0)
     * @param {Number} opts.limit Max number of items in the response (default to 10)
     * @param {module:api/EventsApi~countriesCountryIdEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */
    this.countriesCountryIdEventsGet = function(countryId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'countryId' is set
      if (countryId == undefined || countryId == null) {
        throw new Error("Missing the required parameter 'countryId' when calling countriesCountryIdEventsGet");
      }


      var pathParams = {
        'countryId': countryId
      };
      var queryParams = {
        'vertical': opts['vertical'],
        'priority_city': opts['priorityCity'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = [Event];

      return this.apiClient.callApi(
        '/countries/{countryId}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
