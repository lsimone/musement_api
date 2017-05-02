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
    define(['ApiClient', 'model/Price'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Price'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.ModelDate = factory(root.MusementApi.ApiClient, root.MusementApi.Price);
  }
}(this, function(ApiClient, Price) {
  'use strict';




  /**
   * The ModelDate model module.
   * @module model/ModelDate
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>ModelDate</code>.
   * @alias module:model/ModelDate
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ModelDate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelDate} obj Optional instance to populate.
   * @return {module:model/ModelDate} The populated <code>ModelDate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('day')) {
        obj['day'] = ApiClient.convertToType(data['day'], 'String');
      }
      if (data.hasOwnProperty('soldOut')) {
        obj['soldOut'] = ApiClient.convertToType(data['soldOut'], 'Boolean');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = Price.constructFromObject(data['price']);
      }
      if (data.hasOwnProperty('discountedPrice')) {
        obj['discountedPrice'] = Price.constructFromObject(data['discountedPrice']);
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = Price.constructFromObject(data['discountAmount']);
      }
    }
    return obj;
  }

  /**
   * @member {String} day
   */
  exports.prototype['day'] = undefined;
  /**
   * @member {Boolean} soldOut
   */
  exports.prototype['soldOut'] = undefined;
  /**
   * @member {module:model/Price} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {module:model/Price} discountedPrice
   */
  exports.prototype['discountedPrice'] = undefined;
  /**
   * @member {module:model/Price} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;



  return exports;
}));

