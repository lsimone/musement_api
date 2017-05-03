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
    instance = new MusementApi.BlogpostBlockEmbeddedHtml();
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

  describe('BlogpostBlockEmbeddedHtml', function() {
    it('should create an instance of BlogpostBlockEmbeddedHtml', function() {
      // uncomment below and update the code to test BlogpostBlockEmbeddedHtml
      //var instane = new MusementApi.BlogpostBlockEmbeddedHtml();
      //expect(instance).to.be.a(MusementApi.BlogpostBlockEmbeddedHtml);
    });

    it('should have the property embeddedCode (base name: "embedded_code")', function() {
      // uncomment below and update the code to test the property embeddedCode
      //var instane = new MusementApi.BlogpostBlockEmbeddedHtml();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new MusementApi.BlogpostBlockEmbeddedHtml();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new MusementApi.BlogpostBlockEmbeddedHtml();
      //expect(instance).to.be();
    });

  });

}));
