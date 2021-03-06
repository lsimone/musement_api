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
    root.MusementApi.VenueApi = factory(root.MusementApi.ApiClient, root.MusementApi.Event);
  }
}(this, function(ApiClient, Event) {
  'use strict';

  /**
   * Venue service.
   * @module api/VenueApi
   * @version 3.2.0
   */

  /**
   * Constructs a new VenueApi. 
   * @alias module:api/VenueApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the venuesVenueIdEventsGet operation.
     * @callback module:api/VenueApi~venuesVenueIdEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all events for a venue sorted by venue relevance.
     * Get all events for an venue sorted by relevance. Only the events that have at least one active date in the period specified between date_from and date_to are returned. If date_from and date_to are not set then the period that will be set will be one year from the date of the request&#39;
     * @param {Number} venueId Venue identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.vertical Vertical identifier
     * @param {Number} opts.city City identifier
     * @param {Number} opts.category Category identifier
     * @param {Number} opts.editorialCategory Editorial category identifier
     * @param {String} opts.dateFrom Start date | Use format: YYYY-MM-DD
     * @param {String} opts.dateTo To date | Use format: YYYY-MM-DD
     * @param {Number} opts.offset Pagination offset (default to 0)
     * @param {Number} opts.limit Max number of items in the response (default to 10)
     * @param {module:model/String} opts.sortBy Sorting strategy (default to venue-relevance)
     * @param {module:api/VenueApi~venuesVenueIdEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */
    this.venuesVenueIdEventsGet = function(venueId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'venueId' is set
      if (venueId == undefined || venueId == null) {
        throw new Error("Missing the required parameter 'venueId' when calling venuesVenueIdEventsGet");
      }


      var pathParams = {
        'venueId': venueId
      };
      var queryParams = {
        'vertical': opts['vertical'],
        'city': opts['city'],
        'category': opts['category'],
        'editorial-category': opts['editorialCategory'],
        'date_from': opts['dateFrom'],
        'date_to': opts['dateTo'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy']
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
        '/venues/{venueId}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the venuesVenueIdGet operation.
     * @callback module:api/VenueApi~venuesVenueIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a venue
     * @param {Number} venueId 
     * @param {module:api/VenueApi~venuesVenueIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.venuesVenueIdGet = function(venueId, callback) {
      var postBody = null;

      // verify the required parameter 'venueId' is set
      if (venueId == undefined || venueId == null) {
        throw new Error("Missing the required parameter 'venueId' when calling venuesVenueIdGet");
      }


      var pathParams = {
        'venueId': venueId
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
        '/venues/{venueId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
