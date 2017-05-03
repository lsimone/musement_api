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
    root.MusementApi.Background = factory(root.MusementApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Background model module.
   * @module model/Background
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>Background</code>.
   * @alias module:model/Background
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Background</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Background} obj Optional instance to populate.
   * @return {module:model/Background} The populated <code>Background</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('slogan')) {
        obj['slogan'] = ApiClient.convertToType(data['slogan'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('cover_image_url')) {
        obj['cover_image_url'] = ApiClient.convertToType(data['cover_image_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} slogan
   */
  exports.prototype['slogan'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {String} cover_image_url
   */
  exports.prototype['cover_image_url'] = undefined;



  return exports;
}));


