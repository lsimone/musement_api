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
    define(['ApiClient', 'model/ActivityContent', 'model/TranslatedMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ActivityContent'), require('../model/TranslatedMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.ActivityApi = factory(root.MusementApi.ApiClient, root.MusementApi.ActivityContent, root.MusementApi.TranslatedMetadata);
  }
}(this, function(ApiClient, ActivityContent, TranslatedMetadata) {
  'use strict';

  /**
   * Activity service.
   * @module api/ActivityApi
   * @version 3.2.0
   */

  /**
   * Constructs a new ActivityApi. 
   * @alias module:api/ActivityApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the activitiesActivityUuidContentsLocaleCodeGet operation.
     * @callback module:api/ActivityApi~activitiesActivityUuidContentsLocaleCodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivityContent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get activity content for a specific locale
     * @param {String} activityUuid Activity identifier
     * @param {String} localeCode Locale code
     * @param {module:api/ActivityApi~activitiesActivityUuidContentsLocaleCodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivityContent}
     */
    this.activitiesActivityUuidContentsLocaleCodeGet = function(activityUuid, localeCode, callback) {
      var postBody = null;

      // verify the required parameter 'activityUuid' is set
      if (activityUuid == undefined || activityUuid == null) {
        throw new Error("Missing the required parameter 'activityUuid' when calling activitiesActivityUuidContentsLocaleCodeGet");
      }

      // verify the required parameter 'localeCode' is set
      if (localeCode == undefined || localeCode == null) {
        throw new Error("Missing the required parameter 'localeCode' when calling activitiesActivityUuidContentsLocaleCodeGet");
      }


      var pathParams = {
        'activityUuid': activityUuid,
        'localeCode': localeCode
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
      var returnType = ActivityContent;

      return this.apiClient.callApi(
        '/activities/{activityUuid}/contents/{localeCode}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the activityLanguagesGet operation.
     * @callback module:api/ActivityApi~activityLanguagesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TranslatedMetadata>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all possible languages for the activities
     * @param {module:api/ActivityApi~activityLanguagesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TranslatedMetadata>}
     */
    this.activityLanguagesGet = function(callback) {
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
      var returnType = [TranslatedMetadata];

      return this.apiClient.callApi(
        '/activity-languages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
