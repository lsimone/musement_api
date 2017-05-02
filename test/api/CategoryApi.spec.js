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
    instance = new MusementApi.CategoryApi();
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

  describe('CategoryApi', function() {
    describe('categoriesCategoryIdEventsGet', function() {
      it('should call categoriesCategoryIdEventsGet successfully', function(done) {
        //uncomment below and update the code to test categoriesCategoryIdEventsGet
        //instance.categoriesCategoryIdEventsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoriesCategoryIdGet', function() {
      it('should call categoriesCategoryIdGet successfully', function(done) {
        //uncomment below and update the code to test categoriesCategoryIdGet
        //instance.categoriesCategoryIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('categoriesGet', function() {
      it('should call categoriesGet successfully', function(done) {
        //uncomment below and update the code to test categoriesGet
        //instance.categoriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('citiesCityIdCategoriesGet', function() {
      it('should call citiesCityIdCategoriesGet successfully', function(done) {
        //uncomment below and update the code to test citiesCityIdCategoriesGet
        //instance.citiesCityIdCategoriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
