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
    define(['ApiClient', 'model/PassengerInfo', 'model/Price', 'model/Product', 'model/TicketMetadata'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PassengerInfo'), require('./Price'), require('./Product'), require('./TicketMetadata'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.Ticket = factory(root.MusementApi.ApiClient, root.MusementApi.PassengerInfo, root.MusementApi.Price, root.MusementApi.Product, root.MusementApi.TicketMetadata);
  }
}(this, function(ApiClient, PassengerInfo, Price, Product, TicketMetadata) {
  'use strict';




  /**
   * The Ticket model module.
   * @module model/Ticket
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>Ticket</code>.
   * @alias module:model/Ticket
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Ticket</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ticket} obj Optional instance to populate.
   * @return {module:model/Ticket} The populated <code>Ticket</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('cartId')) {
        obj['cartId'] = ApiClient.convertToType(data['cartId'], 'Number');
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = Product.constructFromObject(data['product']);
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('totalPrice')) {
        obj['totalPrice'] = Price.constructFromObject(data['totalPrice']);
      }
      if (data.hasOwnProperty('passengersInfo')) {
        obj['passengersInfo'] = ApiClient.convertToType(data['passengersInfo'], [PassengerInfo]);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = TicketMetadata.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('vouchers')) {
        obj['vouchers'] = ApiClient.convertToType(data['vouchers'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Ticket unique identifier
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {Number} cartId
   */
  exports.prototype['cartId'] = undefined;
  /**
   * @member {module:model/Product} product
   */
  exports.prototype['product'] = undefined;
  /**
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {module:model/Price} totalPrice
   */
  exports.prototype['totalPrice'] = undefined;
  /**
   * @member {Array.<module:model/PassengerInfo>} passengersInfo
   */
  exports.prototype['passengersInfo'] = undefined;
  /**
   * @member {module:model/TicketMetadata} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<String>} vouchers
   */
  exports.prototype['vouchers'] = undefined;



  return exports;
}));

