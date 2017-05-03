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
    define(['ApiClient', 'model/Customer', 'model/Event'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Customer'), require('./Event'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.Comment = factory(root.MusementApi.ApiClient, root.MusementApi.Customer, root.MusementApi.Event);
  }
}(this, function(ApiClient, Customer, Event) {
  'use strict';




  /**
   * The Comment model module.
   * @module model/Comment
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>Comment</code>.
   * @alias module:model/Comment
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Comment} obj Optional instance to populate.
   * @return {module:model/Comment} The populated <code>Comment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('author')) {
        obj['author'] = Customer.constructFromObject(data['author']);
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('pictures')) {
        obj['pictures'] = ApiClient.convertToType(data['pictures'], ['String']);
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('rating')) {
        obj['rating'] = ApiClient.convertToType(data['rating'], 'Number');
      }
      if (data.hasOwnProperty('sent_at')) {
        obj['sent_at'] = ApiClient.convertToType(data['sent_at'], 'Date');
      }
      if (data.hasOwnProperty('event')) {
        obj['event'] = Event.constructFromObject(data['event']);
      }
    }
    return obj;
  }

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/Customer} author
   */
  exports.prototype['author'] = undefined;
  /**
   * @member {String} locale
   */
  exports.prototype['locale'] = undefined;
  /**
   * @member {Array.<String>} pictures
   */
  exports.prototype['pictures'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * @member {Number} rating
   */
  exports.prototype['rating'] = undefined;
  /**
   * @member {Date} sent_at
   */
  exports.prototype['sent_at'] = undefined;
  /**
   * @member {module:model/Event} event
   */
  exports.prototype['event'] = undefined;



  return exports;
}));


