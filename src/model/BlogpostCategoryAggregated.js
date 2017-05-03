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
    root.MusementApi.BlogpostCategoryAggregated = factory(root.MusementApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BlogpostCategoryAggregated model module.
   * @module model/BlogpostCategoryAggregated
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>BlogpostCategoryAggregated</code>.
   * @alias module:model/BlogpostCategoryAggregated
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>BlogpostCategoryAggregated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BlogpostCategoryAggregated} obj Optional instance to populate.
   * @return {module:model/BlogpostCategoryAggregated} The populated <code>BlogpostCategoryAggregated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('blogpost_count')) {
        obj['blogpost_count'] = ApiClient.convertToType(data['blogpost_count'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('meta_title')) {
        obj['meta_title'] = ApiClient.convertToType(data['meta_title'], 'String');
      }
      if (data.hasOwnProperty('background_image')) {
        obj['background_image'] = ApiClient.convertToType(data['background_image'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} blogpost_count
   */
  exports.prototype['blogpost_count'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} meta_title
   */
  exports.prototype['meta_title'] = undefined;
  /**
   * @member {String} background_image
   */
  exports.prototype['background_image'] = undefined;



  return exports;
}));


