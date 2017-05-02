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
    instance = new MusementApi.Blogpost();
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

  describe('Blogpost', function() {
    it('should create an instance of Blogpost', function() {
      // uncomment below and update the code to test Blogpost
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be.a(MusementApi.Blogpost);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property _abstract (base name: "abstract")', function() {
      // uncomment below and update the code to test the property _abstract
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property publishDate (base name: "publishDate")', function() {
      // uncomment below and update the code to test the property publishDate
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property backgroundImage (base name: "backgroundImage")', function() {
      // uncomment below and update the code to test the property backgroundImage
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property backgroundImageCredits (base name: "backgroundImageCredits")', function() {
      // uncomment below and update the code to test the property backgroundImageCredits
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property categories (base name: "categories")', function() {
      // uncomment below and update the code to test the property categories
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property blocks (base name: "blocks")', function() {
      // uncomment below and update the code to test the property blocks
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

    it('should have the property shareImage (base name: "shareImage")', function() {
      // uncomment below and update the code to test the property shareImage
      //var instane = new MusementApi.Blogpost();
      //expect(instance).to.be();
    });

  });

}));