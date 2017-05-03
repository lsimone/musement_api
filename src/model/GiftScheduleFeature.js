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
    define(['ApiClient', 'model/GiftScheduleProduct'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GiftScheduleProduct'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.GiftScheduleFeature = factory(root.MusementApi.ApiClient, root.MusementApi.GiftScheduleProduct);
  }
}(this, function(ApiClient, GiftScheduleProduct) {
  'use strict';




  /**
   * The GiftScheduleFeature model module.
   * @module model/GiftScheduleFeature
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>GiftScheduleFeature</code>.
   * @alias module:model/GiftScheduleFeature
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>GiftScheduleFeature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GiftScheduleFeature} obj Optional instance to populate.
   * @return {module:model/GiftScheduleFeature} The populated <code>GiftScheduleFeature</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('feature_code')) {
        obj['feature_code'] = ApiClient.convertToType(data['feature_code'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [GiftScheduleProduct]);
      }
    }
    return obj;
  }

  /**
   * @member {String} feature_code
   */
  exports.prototype['feature_code'] = undefined;
  /**
   * Name (label) of Feature.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;
  /**
   * @member {Array.<module:model/GiftScheduleProduct>} products
   */
  exports.prototype['products'] = undefined;



  return exports;
}));


