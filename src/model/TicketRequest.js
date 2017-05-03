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
    define(['ApiClient', 'model/PassengerInfoRequest', 'model/Product', 'model/TicketMetadataRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PassengerInfoRequest'), require('./Product'), require('./TicketMetadataRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.MusementApi) {
      root.MusementApi = {};
    }
    root.MusementApi.TicketRequest = factory(root.MusementApi.ApiClient, root.MusementApi.PassengerInfoRequest, root.MusementApi.Product, root.MusementApi.TicketMetadataRequest);
  }
}(this, function(ApiClient, PassengerInfoRequest, Product, TicketMetadataRequest) {
  'use strict';




  /**
   * The TicketRequest model module.
   * @module model/TicketRequest
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>TicketRequest</code>.
   * @alias module:model/TicketRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>TicketRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TicketRequest} obj Optional instance to populate.
   * @return {module:model/TicketRequest} The populated <code>TicketRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('product')) {
        obj['product'] = Product.constructFromObject(data['product']);
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('passengers_info')) {
        obj['passengers_info'] = ApiClient.convertToType(data['passengers_info'], [PassengerInfoRequest]);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = TicketMetadataRequest.constructFromObject(data['metadata']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Product} product
   */
  exports.prototype['product'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {Array.<module:model/PassengerInfoRequest>} passengers_info
   */
  exports.prototype['passengers_info'] = undefined;
  /**
   * @member {module:model/TicketMetadataRequest} metadata
   */
  exports.prototype['metadata'] = undefined;



  return exports;
}));


