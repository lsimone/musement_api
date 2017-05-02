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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.Price = factory(root.MusementApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Price model module.
   * @module model/Price
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>Price</code>.
   * @alias module:model/Price
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Price</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Price} obj Optional instance to populate.
   * @return {module:model/Price} The populated <code>Price</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('formattedValue')) {
        obj['formattedValue'] = ApiClient.convertToType(data['formattedValue'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {Number} formattedValue
   */
  exports.prototype['formattedValue'] = undefined;



  return exports;
}));


