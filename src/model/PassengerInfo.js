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
    root.MusementApi.PassengerInfo = factory(root.MusementApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PassengerInfo model module.
   * @module model/PassengerInfo
   * @version 3.2.0
   */

  /**
   * Constructs a new <code>PassengerInfo</code>.
   * @alias module:model/PassengerInfo
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>PassengerInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PassengerInfo} obj Optional instance to populate.
   * @return {module:model/PassengerInfo} The populated <code>PassengerInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('salutation')) {
        obj['salutation'] = ApiClient.convertToType(data['salutation'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('date_of_birth')) {
        obj['date_of_birth'] = ApiClient.convertToType(data['date_of_birth'], 'Date');
      }
      if (data.hasOwnProperty('passport')) {
        obj['passport'] = ApiClient.convertToType(data['passport'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('passport_expiry_date')) {
        obj['passport_expiry_date'] = ApiClient.convertToType(data['passport_expiry_date'], 'Date');
      }
      if (data.hasOwnProperty('nationality')) {
        obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
      }
      if (data.hasOwnProperty('medical_notes')) {
        obj['medical_notes'] = ApiClient.convertToType(data['medical_notes'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
      if (data.hasOwnProperty('fan_card')) {
        obj['fan_card'] = ApiClient.convertToType(data['fan_card'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} salutation
   */
  exports.prototype['salutation'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {Date} date_of_birth
   */
  exports.prototype['date_of_birth'] = undefined;
  /**
   * @member {String} passport
   */
  exports.prototype['passport'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Date} passport_expiry_date
   */
  exports.prototype['passport_expiry_date'] = undefined;
  /**
   * @member {String} nationality
   */
  exports.prototype['nationality'] = undefined;
  /**
   * @member {String} medical_notes
   */
  exports.prototype['medical_notes'] = undefined;
  /**
   * @member {String} address
   */
  exports.prototype['address'] = undefined;
  /**
   * /_**
   * @member {String} fan_card
   */
  exports.prototype['fan_card'] = undefined;



  return exports;
}));


