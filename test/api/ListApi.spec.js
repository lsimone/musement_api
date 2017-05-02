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
    instance = new MusementApi.ListApi();
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

  describe('ListApi', function() {
    describe('citiesCityIdListsGet', function() {
      it('should call citiesCityIdListsGet successfully', function(done) {
        //uncomment below and update the code to test citiesCityIdListsGet
        //instance.citiesCityIdListsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('citiesCityIdListsListIdDestinationsPost', function() {
      it('should call citiesCityIdListsListIdDestinationsPost successfully', function(done) {
        //uncomment below and update the code to test citiesCityIdListsListIdDestinationsPost
        //instance.citiesCityIdListsListIdDestinationsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listTypesGet', function() {
      it('should call listTypesGet successfully', function(done) {
        //uncomment below and update the code to test listTypesGet
        //instance.listTypesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsGet', function() {
      it('should call listsGet successfully', function(done) {
        //uncomment below and update the code to test listsGet
        //instance.listsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsIdGet', function() {
      it('should call listsIdGet successfully', function(done) {
        //uncomment below and update the code to test listsIdGet
        //instance.listsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
