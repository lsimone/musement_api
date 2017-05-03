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
    root.MusementApi.MusementListMusementItem = factory(root.MusementApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MusementListMusementItem model module.
   * @module model/MusementListMusementItem
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>MusementListMusementItem</code>.
   * @alias module:model/MusementListMusementItem
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MusementListMusementItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MusementListMusementItem} obj Optional instance to populate.
   * @return {module:model/MusementListMusementItem} The populated <code>MusementListMusementItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('public_type')) {
        obj['public_type'] = ApiClient.convertToType(data['public_type'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} public_type
   */
  exports.prototype['public_type'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));


