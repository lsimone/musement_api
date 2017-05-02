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
    root.MusementApi.ScheduleProduct = factory(root.MusementApi.ApiClient, root.MusementApi.Price);
  }
}(this, function(ApiClient, Price) {
  'use strict';




  /**
   * The ScheduleProduct model module.
   * @module model/ScheduleProduct
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>ScheduleProduct</code>.
   * @alias module:model/ScheduleProduct
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ScheduleProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduleProduct} obj Optional instance to populate.
   * @return {module:model/ScheduleProduct} The populated <code>ScheduleProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('holderCode')) {
        obj['holderCode'] = ApiClient.convertToType(data['holderCode'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('productId')) {
        obj['productId'] = ApiClient.convertToType(data['productId'], 'String');
      }
      if (data.hasOwnProperty('minBuy')) {
        obj['minBuy'] = ApiClient.convertToType(data['minBuy'], 'Number');
      }
      if (data.hasOwnProperty('maxBuy')) {
        obj['maxBuy'] = ApiClient.convertToType(data['maxBuy'], 'Number');
      }
      if (data.hasOwnProperty('availability')) {
        obj['availability'] = ApiClient.convertToType(data['availability'], 'Number');
      }
      if (data.hasOwnProperty('rawPrice')) {
        obj['rawPrice'] = Price.constructFromObject(data['rawPrice']);
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = Price.constructFromObject(data['discountAmount']);
      }
      if (data.hasOwnProperty('retailPrice')) {
        obj['retailPrice'] = Price.constructFromObject(data['retailPrice']);
      }
      if (data.hasOwnProperty('serviceFee')) {
        obj['serviceFee'] = Price.constructFromObject(data['serviceFee']);
      }
    }
    return obj;
  }

  /**
   * @member {String} holderCode
   */
  exports.prototype['holderCode'] = undefined;
  /**
   * Name (label) of Holder.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} productId
   */
  exports.prototype['productId'] = undefined;
  /**
   * @member {Number} minBuy
   */
  exports.prototype['minBuy'] = undefined;
  /**
   * @member {Number} maxBuy
   */
  exports.prototype['maxBuy'] = undefined;
  /**
   * @member {Number} availability
   */
  exports.prototype['availability'] = undefined;
  /**
   * This is the price to the user without any discount applied. (same currency as retailPrice)
   * @member {module:model/Price} rawPrice
   */
  exports.prototype['rawPrice'] = undefined;
  /**
   * Amount of discount in same currency as retailPrice (only SeatPrice.discount used because its not in Cart)
   * @member {module:model/Price} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * Price with discount applied (only SeatPrice.discount used because its not in Cart)
   * @member {module:model/Price} retailPrice
   */
  exports.prototype['retailPrice'] = undefined;
  /**
   * @member {module:model/Price} serviceFee
   */
  exports.prototype['serviceFee'] = undefined;



  return exports;
}));

