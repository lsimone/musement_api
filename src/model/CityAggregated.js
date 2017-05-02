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
    define(['ApiClient', 'model/Country'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Country'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.CityAggregated = factory(root.MusementApi.ApiClient, root.MusementApi.Country);
  }
}(this, function(ApiClient, Country) {
  'use strict';




  /**
   * The CityAggregated model module.
   * @module model/CityAggregated
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>CityAggregated</code>.
   * @alias module:model/CityAggregated
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>CityAggregated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CityAggregated} obj Optional instance to populate.
   * @return {module:model/CityAggregated} The populated <code>CityAggregated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eventCount')) {
        obj['eventCount'] = ApiClient.convertToType(data['eventCount'], 'Number');
      }
      if (data.hasOwnProperty('listCount')) {
        obj['listCount'] = ApiClient.convertToType(data['listCount'], 'Number');
      }
      if (data.hasOwnProperty('venueCount')) {
        obj['venueCount'] = ApiClient.convertToType(data['venueCount'], 'Number');
      }
      if (data.hasOwnProperty('showInPopular')) {
        obj['showInPopular'] = ApiClient.convertToType(data['showInPopular'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('top')) {
        obj['top'] = ApiClient.convertToType(data['top'], 'Boolean');
      }
      if (data.hasOwnProperty('hasConcierge')) {
        obj['hasConcierge'] = ApiClient.convertToType(data['hasConcierge'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('more')) {
        obj['more'] = ApiClient.convertToType(data['more'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = Country.constructFromObject(data['country']);
      }
      if (data.hasOwnProperty('coverImageUrl')) {
        obj['coverImageUrl'] = ApiClient.convertToType(data['coverImageUrl'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('eventsCount')) {
        obj['eventsCount'] = ApiClient.convertToType(data['eventsCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} eventCount
   */
  exports.prototype['eventCount'] = undefined;
  /**
   * @member {Number} listCount
   */
  exports.prototype['listCount'] = undefined;
  /**
   * @member {Number} venueCount
   */
  exports.prototype['venueCount'] = undefined;
  /**
   * @member {Boolean} showInPopular
   */
  exports.prototype['showInPopular'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Indicate if the event is a Musement 'top' event
   * @member {Boolean} top
   */
  exports.prototype['top'] = undefined;
  /**
   * True for cities with Musement's concierge service active
   * @member {Boolean} hasConcierge
   */
  exports.prototype['hasConcierge'] = undefined;
  /**
   * City name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * City code. Do not depends on locale
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Description
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {String} more
   */
  exports.prototype['more'] = undefined;
  /**
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;
  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * @member {module:model/Country} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} coverImageUrl
   */
  exports.prototype['coverImageUrl'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Number of active events
   * @member {Number} eventsCount
   */
  exports.prototype['eventsCount'] = undefined;



  return exports;
}));


