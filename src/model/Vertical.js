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
    define(['ApiClient', 'model/Event'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Event'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.Vertical = factory(root.MusementApi.ApiClient, root.MusementApi.Event);
  }
}(this, function(ApiClient, Event) {
  'use strict';




  /**
   * The Vertical model module.
   * @module model/Vertical
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>Vertical</code>.
   * @alias module:model/Vertical
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Vertical</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vertical} obj Optional instance to populate.
   * @return {module:model/Vertical} The populated <code>Vertical</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('sectionTitle')) {
        obj['sectionTitle'] = ApiClient.convertToType(data['sectionTitle'], 'String');
      }
      if (data.hasOwnProperty('coverImageUrl')) {
        obj['coverImageUrl'] = ApiClient.convertToType(data['coverImageUrl'], 'String');
      }
      if (data.hasOwnProperty('topEvents')) {
        obj['topEvents'] = ApiClient.convertToType(data['topEvents'], [Event]);
      }
      if (data.hasOwnProperty('relevance')) {
        obj['relevance'] = ApiClient.convertToType(data['relevance'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * @member {String} sectionTitle
   */
  exports.prototype['sectionTitle'] = undefined;
  /**
   * @member {String} coverImageUrl
   */
  exports.prototype['coverImageUrl'] = undefined;
  /**
   * @member {Array.<module:model/Event>} topEvents
   */
  exports.prototype['topEvents'] = undefined;
  /**
   * @member {Number} relevance
   */
  exports.prototype['relevance'] = undefined;



  return exports;
}));

