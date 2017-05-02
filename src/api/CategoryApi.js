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
    define(['ApiClient', 'model/Category', 'model/Event'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Category'), require('../model/Event'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.CategoryApi = factory(root.MusementApi.ApiClient, root.MusementApi.Category, root.MusementApi.Event);
  }
}(this, function(ApiClient, Category, Event) {
  'use strict';

  /**
   * Category service.
   * @module api/CategoryApi
   * @version 3.2.0
   */

  /**
   * Constructs a new CategoryApi. 
   * @alias module:api/CategoryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the categoriesCategoryIdEventsGet operation.
     * @callback module:api/CategoryApi~categoriesCategoryIdEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get events for a category sorted by category relevance.
     * Get all events for a category sorted by category relevance. Only the events that have at least one active date in the period specified between date_from and date_to are returned. If date_from and date_to are not set then the period that will be set will be one year from the date of the request&#39;
     * @param {Number} categoryId Category identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.vertical Vertical identifier
     * @param {Number} opts.city City identifier
     * @param {Number} opts.venue Venue identifier
     * @param {Number} opts.editorialCategory Editorial category identifier
     * @param {String} opts.dateFrom Start date | Use format: YYYY-MM-DD
     * @param {String} opts.dateTo To date | Use format: YYYY-MM-DD
     * @param {Number} opts.offset Pagination offset (default to 0)
     * @param {Number} opts.limit Max number of items in the response (default to 10)
     * @param {module:model/String} opts.sortBy Sorting strategy (default to venue-relevance)
     * @param {module:api/CategoryApi~categoriesCategoryIdEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Event>}
     */
    this.categoriesCategoryIdEventsGet = function(categoryId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId == undefined || categoryId == null) {
        throw new Error("Missing the required parameter 'categoryId' when calling categoriesCategoryIdEventsGet");
      }


      var pathParams = {
        'categoryId': categoryId
      };
      var queryParams = {
        'vertical': opts['vertical'],
        'city': opts['city'],
        'venue': opts['venue'],
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
        '/categories/{categoryId}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the categoriesCategoryIdGet operation.
     * @callback module:api/CategoryApi~categoriesCategoryIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Category} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a category by identifier
     * @param {Number} categoryId Category identifier
     * @param {module:api/CategoryApi~categoriesCategoryIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Category}
     */
    this.categoriesCategoryIdGet = function(categoryId, callback) {
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId == undefined || categoryId == null) {
        throw new Error("Missing the required parameter 'categoryId' when calling categoriesCategoryIdGet");
      }


      var pathParams = {
        'categoryId': categoryId
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
      var returnType = Category;

      return this.apiClient.callApi(
        '/categories/{categoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the categoriesGet operation.
     * @callback module:api/CategoryApi~categoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Category>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get categories
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset (default to 0)
     * @param {Number} opts.limit Max number of items in the response (default to 10)
     * @param {module:api/CategoryApi~categoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Category>}
     */
    this.categoriesGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = [Category];

      return this.apiClient.callApi(
        '/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the citiesCityIdCategoriesGet operation.
     * @callback module:api/CategoryApi~citiesCityIdCategoriesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Categories for the city. Sorted by the number of events for the category
     * @param {Number} cityId City identifier
     * @param {module:api/CategoryApi~citiesCityIdCategoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.citiesCityIdCategoriesGet = function(cityId, callback) {
      var postBody = null;

      // verify the required parameter 'cityId' is set
      if (cityId == undefined || cityId == null) {
        throw new Error("Missing the required parameter 'cityId' when calling citiesCityIdCategoriesGet");
      }


      var pathParams = {
        'cityId': cityId
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
        '/cities/{cityId}/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
