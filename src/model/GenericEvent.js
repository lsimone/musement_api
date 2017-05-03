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
    define(['ApiClient', 'model/City', 'model/GalleryMedia', 'model/Venue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./City'), require('./GalleryMedia'), require('./Venue'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.GenericEvent = factory(root.MusementApi.ApiClient, root.MusementApi.City, root.MusementApi.GalleryMedia, root.MusementApi.Venue);
  }
}(this, function(ApiClient, City, GalleryMedia, Venue) {
  'use strict';




  /**
   * The GenericEvent model module.
   * @module model/GenericEvent
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>GenericEvent</code>.
   * @alias module:model/GenericEvent
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>GenericEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GenericEvent} obj Optional instance to populate.
   * @return {module:model/GenericEvent} The populated <code>GenericEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('where_is')) {
        obj['where_is'] = ApiClient.convertToType(data['where_is'], 'String');
      }
      if (data.hasOwnProperty('when_is')) {
        obj['when_is'] = ApiClient.convertToType(data['when_is'], 'String');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('rating')) {
        obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
      }
      if (data.hasOwnProperty('votes')) {
        obj['votes'] = ApiClient.convertToType(data['votes'], 'Number');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = City.constructFromObject(data['city']);
      }
      if (data.hasOwnProperty('venue')) {
        obj['venue'] = Venue.constructFromObject(data['venue']);
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [GalleryMedia]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} where_is
   */
  exports.prototype['where_is'] = undefined;
  /**
   * @member {String} when_is
   */
  exports.prototype['when_is'] = undefined;
  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * @member {String} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {String} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {String} website
   */
  exports.prototype['website'] = undefined;
  /**
   * @member {Number} rating
   */
  exports.prototype['rating'] = undefined;
  /**
   * @member {Number} votes
   */
  exports.prototype['votes'] = undefined;
  /**
   * @member {module:model/City} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {module:model/Venue} venue
   */
  exports.prototype['venue'] = undefined;
  /**
   * @member {Array.<module:model/GalleryMedia>} images
   */
  exports.prototype['images'] = undefined;



  return exports;
}));


