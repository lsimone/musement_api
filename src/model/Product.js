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
    define(['ApiClient', 'model/Event', 'model/Price'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Event'), require('./Price'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.Product = factory(root.MusementApi.ApiClient, root.MusementApi.Event, root.MusementApi.Price);
  }
}(this, function(ApiClient, Event, Price) {
  'use strict';




  /**
   * The Product model module.
   * @module model/Product
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('datetime')) {
        obj['datetime'] = ApiClient.convertToType(data['datetime'], 'Date');
      }
      if (data.hasOwnProperty('tourist_category')) {
        obj['tourist_category'] = ApiClient.convertToType(data['tourist_category'], 'String');
      }
      if (data.hasOwnProperty('activity_name')) {
        obj['activity_name'] = ApiClient.convertToType(data['activity_name'], 'String');
      }
      if (data.hasOwnProperty('activity')) {
        obj['activity'] = Event.constructFromObject(data['activity']);
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('final_price')) {
        obj['final_price'] = Price.constructFromObject(data['final_price']);
      }
      if (data.hasOwnProperty('discount_amount')) {
        obj['discount_amount'] = Price.constructFromObject(data['discount_amount']);
      }
      if (data.hasOwnProperty('service_fee')) {
        obj['service_fee'] = Price.constructFromObject(data['service_fee']);
      }
    }
    return obj;
  }

  /**
   * This is a unique identifier of the product. For Musement's product this is the SeatPriceId for 3rd party product is the unique identifier of the partner's product.  Please note that this is a string
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Date} datetime
   */
  exports.prototype['datetime'] = undefined;
  /**
   * @member {String} tourist_category
   */
  exports.prototype['tourist_category'] = undefined;
  /**
   * @member {String} activity_name
   */
  exports.prototype['activity_name'] = undefined;
  /**
   * @member {module:model/Event} activity
   */
  exports.prototype['activity'] = undefined;
  /**
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * @member {module:model/Price} final_price
   */
  exports.prototype['final_price'] = undefined;
  /**
   * @member {module:model/Price} discount_amount
   */
  exports.prototype['discount_amount'] = undefined;
  /**
   * @member {module:model/Price} service_fee
   */
  exports.prototype['service_fee'] = undefined;



  return exports;
}));


