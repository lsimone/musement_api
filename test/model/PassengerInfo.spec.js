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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MusementApi);
  }
}(this, function(expect, MusementApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MusementApi.PassengerInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PassengerInfo', function() {
    it('should create an instance of PassengerInfo', function() {
      // uncomment below and update the code to test PassengerInfo
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be.a(MusementApi.PassengerInfo);
    });

    it('should have the property salutation (base name: "salutation")', function() {
      // uncomment below and update the code to test the property salutation
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property dateOfBirth (base name: "dateOfBirth")', function() {
      // uncomment below and update the code to test the property dateOfBirth
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property passport (base name: "passport")', function() {
      // uncomment below and update the code to test the property passport
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property passportExpiryDate (base name: "passportExpiryDate")', function() {
      // uncomment below and update the code to test the property passportExpiryDate
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property nationality (base name: "nationality")', function() {
      // uncomment below and update the code to test the property nationality
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property medicalNotes (base name: "medicalNotes")', function() {
      // uncomment below and update the code to test the property medicalNotes
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

    it('should have the property fanCard (base name: "fanCard")', function() {
      // uncomment below and update the code to test the property fanCard
      //var instane = new MusementApi.PassengerInfo();
      //expect(instance).to.be();
    });

  });

}));