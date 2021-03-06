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
    root.MusementApi.Supplier = factory(root.MusementApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Supplier model module.
   * @module model/Supplier
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>Supplier</code>.
   * @alias module:model/Supplier
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Supplier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Supplier} obj Optional instance to populate.
   * @return {module:model/Supplier} The populated <code>Supplier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('contact_email')) {
        obj['contact_email'] = ApiClient.convertToType(data['contact_email'], 'String');
      }
      if (data.hasOwnProperty('contact_number')) {
        obj['contact_number'] = ApiClient.convertToType(data['contact_number'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} contact_email
   */
  exports.prototype['contact_email'] = undefined;
  /**
   * @member {String} contact_number
   */
  exports.prototype['contact_number'] = undefined;



  return exports;
}));


