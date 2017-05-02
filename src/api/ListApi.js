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
    define(['ApiClient', 'model/ListType', 'model/MusementList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListType'), require('../model/MusementList'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.ListApi = factory(root.MusementApi.ApiClient, root.MusementApi.ListType, root.MusementApi.MusementList);
  }
}(this, function(ApiClient, ListType, MusementList) {
  'use strict';

  /**
   * List service.
   * @module api/ListApi
   * @version 3.2.0
   */

  /**
   * Constructs a new ListApi. 
   * @alias module:api/ListApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the citiesCityIdListsGet operation.
     * @callback module:api/ListApi~citiesCityIdListsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MusementList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get lists for a city
     * @param {Number} cityId City identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset (default to 0)
     * @param {Number} opts.limit Max number of items in the response (default to 10)
     * @param {module:model/String} opts.sortBy Set sorting strategy (default to weight)
     * @param {module:model/String} opts.withoutEvents Set to &#39;yes&#39; return all cities otherwise only those with events (default to no)
     * @param {Array.<String>} opts.tag List tags to filter by
     * @param {Array.<String>} opts.listTypes List type to filter by
     * @param {module:api/ListApi~citiesCityIdListsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MusementList>}
     */
    this.citiesCityIdListsGet = function(cityId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'cityId' is set
      if (cityId == undefined || cityId == null) {
        throw new Error("Missing the required parameter 'cityId' when calling citiesCityIdListsGet");
      }


      var pathParams = {
        'cityId': cityId
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort_by': opts['sortBy'],
        'without_events': opts['withoutEvents'],
        'tag': this.apiClient.buildCollectionParam(opts['tag'], 'multi'),
        'list-types': this.apiClient.buildCollectionParam(opts['listTypes'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = [MusementList];

      return this.apiClient.callApi(
        '/cities/{cityId}/lists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the citiesCityIdListsListIdDestinationsPost operation.
     * @callback module:api/ListApi~citiesCityIdListsListIdDestinationsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a thirdparty destination to a list. If the destination is already present in the list increments the votes
     * @param {Number} cityId 
     * @param {Number} listId 
     * @param {String} provider 
     * @param {String} providerIdentifier 
     * @param {module:api/ListApi~citiesCityIdListsListIdDestinationsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.citiesCityIdListsListIdDestinationsPost = function(cityId, listId, provider, providerIdentifier, callback) {
      var postBody = null;

      // verify the required parameter 'cityId' is set
      if (cityId == undefined || cityId == null) {
        throw new Error("Missing the required parameter 'cityId' when calling citiesCityIdListsListIdDestinationsPost");
      }

      // verify the required parameter 'listId' is set
      if (listId == undefined || listId == null) {
        throw new Error("Missing the required parameter 'listId' when calling citiesCityIdListsListIdDestinationsPost");
      }

      // verify the required parameter 'provider' is set
      if (provider == undefined || provider == null) {
        throw new Error("Missing the required parameter 'provider' when calling citiesCityIdListsListIdDestinationsPost");
      }

      // verify the required parameter 'providerIdentifier' is set
      if (providerIdentifier == undefined || providerIdentifier == null) {
        throw new Error("Missing the required parameter 'providerIdentifier' when calling citiesCityIdListsListIdDestinationsPost");
      }


      var pathParams = {
        'city_id': cityId,
        'list_id': listId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'provider': provider,
        'provider_identifier': providerIdentifier
      };

      var authNames = [];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/cities/{city_id}/lists/{list_id}/destinations', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTypesGet operation.
     * @callback module:api/ListApi~listTypesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ListType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all List types
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset (default to 0)
     * @param {Number} opts.limit Max number of items in the response (default to 10)
     * @param {module:api/ListApi~listTypesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ListType}
     */
    this.listTypesGet = function(opts, callback) {
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
      var returnType = ListType;

      return this.apiClient.callApi(
        '/list-types', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsGet operation.
     * @callback module:api/ListApi~listsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MusementList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all lists
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset (default to 0)
     * @param {Number} opts.limit Max number of items in the response (default to 10)
     * @param {module:api/ListApi~listsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MusementList}
     */
    this.listsGet = function(opts, callback) {
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
      var returnType = MusementList;

      return this.apiClient.callApi(
        '/lists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listsIdGet operation.
     * @callback module:api/ListApi~listsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MusementList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list by ID
     * @param {Number} id List identifier
     * @param {module:api/ListApi~listsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MusementList}
     */
    this.listsIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw new Error("Missing the required parameter 'id' when calling listsIdGet");
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

      var authNames = ['Bearer'];
      var contentTypes = ['application/xml', 'application/json'];
      var accepts = ['application/xml', 'application/json'];
      var returnType = MusementList;

      return this.apiClient.callApi(
        '/lists/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));