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
    instance = new MusementApi.CustomerRequest();
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

  describe('CustomerRequest', function() {
    it('should create an instance of CustomerRequest', function() {
      // uncomment below and update the code to test CustomerRequest
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be.a(MusementApi.CustomerRequest);
    });

    it('should have the property favouriteCity (base name: "favouriteCity")', function() {
      // uncomment below and update the code to test the property favouriteCity
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property zipcode (base name: "zipcode")', function() {
      // uncomment below and update the code to test the property zipcode
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property idNumber (base name: "idNumber")', function() {
      // uncomment below and update the code to test the property idNumber
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property mobile (base name: "mobile")', function() {
      // uncomment below and update the code to test the property mobile
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property vatNumber (base name: "vatNumber")', function() {
      // uncomment below and update the code to test the property vatNumber
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

    it('should have the property birthdate (base name: "birthdate")', function() {
      // uncomment below and update the code to test the property birthdate
      //var instane = new MusementApi.CustomerRequest();
      //expect(instance).to.be();
    });

  });

}));