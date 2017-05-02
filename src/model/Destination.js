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
    define(['ApiClient', 'model/City', 'model/DestinationComment', 'model/DestinationPhoto', 'model/Vertical'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./City'), require('./DestinationComment'), require('./DestinationPhoto'), require('./Vertical'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.Destination = factory(root.MusementApi.ApiClient, root.MusementApi.City, root.MusementApi.DestinationComment, root.MusementApi.DestinationPhoto, root.MusementApi.Vertical);
  }
}(this, function(ApiClient, City, DestinationComment, DestinationPhoto, Vertical) {
  'use strict';




  /**
   * The Destination model module.
   * @module model/Destination
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>Destination</code>.
   * @alias module:model/Destination
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>Destination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Destination} obj Optional instance to populate.
   * @return {module:model/Destination} The populated <code>Destination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('verticals')) {
        obj['verticals'] = ApiClient.convertToType(data['verticals'], [Vertical]);
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = City.constructFromObject(data['city']);
      }
      if (data.hasOwnProperty('saves')) {
        obj['saves'] = ApiClient.convertToType(data['saves'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('canonicalUrl')) {
        obj['canonicalUrl'] = ApiClient.convertToType(data['canonicalUrl'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('priceRange')) {
        obj['priceRange'] = ApiClient.convertToType(data['priceRange'], 'Number');
      }
      if (data.hasOwnProperty('latitude')) {
        obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
      }
      if (data.hasOwnProperty('longitude')) {
        obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('photos')) {
        obj['photos'] = ApiClient.convertToType(data['photos'], [DestinationPhoto]);
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], [DestinationComment]);
      }
      if (data.hasOwnProperty('openingHours')) {
        obj['openingHours'] = ApiClient.convertToType(data['openingHours'], ['String']);
      }
      if (data.hasOwnProperty('specialities')) {
        obj['specialities'] = ApiClient.convertToType(data['specialities'], ['String']);
      }
      if (data.hasOwnProperty('rating')) {
        obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:model/Vertical>} verticals
   */
  exports.prototype['verticals'] = undefined;
  /**
   * @member {module:model/City} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {Number} saves
   */
  exports.prototype['saves'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} canonicalUrl
   */
  exports.prototype['canonicalUrl'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {String} website
   */
  exports.prototype['website'] = undefined;
  /**
   * @member {Number} priceRange
   */
  exports.prototype['priceRange'] = undefined;
  /**
   * @member {Number} latitude
   */
  exports.prototype['latitude'] = undefined;
  /**
   * @member {Number} longitude
   */
  exports.prototype['longitude'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Array.<module:model/DestinationPhoto>} photos
   */
  exports.prototype['photos'] = undefined;
  /**
   * @member {Array.<module:model/DestinationComment>} comments
   */
  exports.prototype['comments'] = undefined;
  /**
   * @member {Array.<String>} openingHours
   */
  exports.prototype['openingHours'] = undefined;
  /**
   * @member {Array.<String>} specialities
   */
  exports.prototype['specialities'] = undefined;
  /**
   * @member {Number} rating
   */
  exports.prototype['rating'] = undefined;



  return exports;
}));

