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
    root.MusementApi.RedirectTo3dSecureCardIssuer = factory(root.MusementApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RedirectTo3dSecureCardIssuer model module.
   * @module model/RedirectTo3dSecureCardIssuer
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>RedirectTo3dSecureCardIssuer</code>.
   * @alias module:model/RedirectTo3dSecureCardIssuer
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>RedirectTo3dSecureCardIssuer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RedirectTo3dSecureCardIssuer} obj Optional instance to populate.
   * @return {module:model/RedirectTo3dSecureCardIssuer} The populated <code>RedirectTo3dSecureCardIssuer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


