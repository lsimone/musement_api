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
    instance = new MusementApi.Bundle();
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

  describe('Bundle', function() {
    it('should create an instance of Bundle', function() {
      // uncomment below and update the code to test Bundle
      //var instane = new MusementApi.Bundle();
      //expect(instance).to.be.a(MusementApi.Bundle);
    });

    it('should have the property discount (base name: "discount")', function() {
      // uncomment below and update the code to test the property discount
      //var instane = new MusementApi.Bundle();
      //expect(instance).to.be();
    });

    it('should have the property discountType (base name: "discount_type")', function() {
      // uncomment below and update the code to test the property discountType
      //var instane = new MusementApi.Bundle();
      //expect(instance).to.be();
    });

    it('should have the property bundleType (base name: "bundle_type")', function() {
      // uncomment below and update the code to test the property bundleType
      //var instane = new MusementApi.Bundle();
      //expect(instance).to.be();
    });

    it('should have the property activities (base name: "activities")', function() {
      // uncomment below and update the code to test the property activities
      //var instane = new MusementApi.Bundle();
      //expect(instance).to.be();
    });

  });

}));
