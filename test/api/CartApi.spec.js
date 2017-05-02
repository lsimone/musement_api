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
    instance = new MusementApi.CartApi();
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

  describe('CartApi', function() {
    describe('cartsCartIdDelete', function() {
      it('should call cartsCartIdDelete successfully', function(done) {
        //uncomment below and update the code to test cartsCartIdDelete
        //instance.cartsCartIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cartsCartIdFormGet', function() {
      it('should call cartsCartIdFormGet successfully', function(done) {
        //uncomment below and update the code to test cartsCartIdFormGet
        //instance.cartsCartIdFormGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cartsCartIdGet', function() {
      it('should call cartsCartIdGet successfully', function(done) {
        //uncomment below and update the code to test cartsCartIdGet
        //instance.cartsCartIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cartsCartIdGiftsGiftCodePut', function() {
      it('should call cartsCartIdGiftsGiftCodePut successfully', function(done) {
        //uncomment below and update the code to test cartsCartIdGiftsGiftCodePut
        //instance.cartsCartIdGiftsGiftCodePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cartsCartIdGiftsPost', function() {
      it('should call cartsCartIdGiftsPost successfully', function(done) {
        //uncomment below and update the code to test cartsCartIdGiftsPost
        //instance.cartsCartIdGiftsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cartsCartIdPatch', function() {
      it('should call cartsCartIdPatch successfully', function(done) {
        //uncomment below and update the code to test cartsCartIdPatch
        //instance.cartsCartIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cartsCartIdPut', function() {
      it('should call cartsCartIdPut successfully', function(done) {
        //uncomment below and update the code to test cartsCartIdPut
        //instance.cartsCartIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cartsIdTicketsPost', function() {
      it('should call cartsIdTicketsPost successfully', function(done) {
        //uncomment below and update the code to test cartsIdTicketsPost
        //instance.cartsIdTicketsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cartsIdTicketsTicketIdDelete', function() {
      it('should call cartsIdTicketsTicketIdDelete successfully', function(done) {
        //uncomment below and update the code to test cartsIdTicketsTicketIdDelete
        //instance.cartsIdTicketsTicketIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cartsPost', function() {
      it('should call cartsPost successfully', function(done) {
        //uncomment below and update the code to test cartsPost
        //instance.cartsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
