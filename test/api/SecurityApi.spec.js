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
    instance = new MusementApi.SecurityApi();
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

  describe('SecurityApi', function() {
    describe('contentManagersMeGet', function() {
      it('should call contentManagersMeGet successfully', function(done) {
        //uncomment below and update the code to test contentManagersMeGet
        //instance.contentManagersMeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customersMeGet', function() {
      it('should call customersMeGet successfully', function(done) {
        //uncomment below and update the code to test customersMeGet
        //instance.customersMeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('loginGet', function() {
      it('should call loginGet successfully', function(done) {
        //uncomment below and update the code to test loginGet
        //instance.loginGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('refreshGet', function() {
      it('should call refreshGet successfully', function(done) {
        //uncomment below and update the code to test refreshGet
        //instance.refreshGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('resetPasswordPost', function() {
      it('should call resetPasswordPost successfully', function(done) {
        //uncomment below and update the code to test resetPasswordPost
        //instance.resetPasswordPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('signupExternalProviderPost', function() {
      it('should call signupExternalProviderPost successfully', function(done) {
        //uncomment below and update the code to test signupExternalProviderPost
        //instance.signupExternalProviderPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('signupPost', function() {
      it('should call signupPost successfully', function(done) {
        //uncomment below and update the code to test signupPost
        //instance.signupPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('signupSoftPost', function() {
      it('should call signupSoftPost successfully', function(done) {
        //uncomment below and update the code to test signupSoftPost
        //instance.signupSoftPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('suppliersMeActivitiesGet', function() {
      it('should call suppliersMeActivitiesGet successfully', function(done) {
        //uncomment below and update the code to test suppliersMeActivitiesGet
        //instance.suppliersMeActivitiesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('suppliersMeGet', function() {
      it('should call suppliersMeGet successfully', function(done) {
        //uncomment below and update the code to test suppliersMeGet
        //instance.suppliersMeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('suppliersMePriceFeaturesGet', function() {
      it('should call suppliersMePriceFeaturesGet successfully', function(done) {
        //uncomment below and update the code to test suppliersMePriceFeaturesGet
        //instance.suppliersMePriceFeaturesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('suppliersMeTicketHoldersGet', function() {
      it('should call suppliersMeTicketHoldersGet successfully', function(done) {
        //uncomment below and update the code to test suppliersMeTicketHoldersGet
        //instance.suppliersMeTicketHoldersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));