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
    instance = new MusementApi.OrderApi();
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

  describe('OrderApi', function() {
    describe('customersMeOrdersGet', function() {
      it('should call customersMeOrdersGet successfully', function(done) {
        //uncomment below and update the code to test customersMeOrdersGet
        //instance.customersMeOrdersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('customersMeOrdersOrderIdTicketsTicketIdGet', function() {
      it('should call customersMeOrdersOrderIdTicketsTicketIdGet successfully', function(done) {
        //uncomment below and update the code to test customersMeOrdersOrderIdTicketsTicketIdGet
        //instance.customersMeOrdersOrderIdTicketsTicketIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ordersOrderUuidGet', function() {
      it('should call ordersOrderUuidGet successfully', function(done) {
        //uncomment below and update the code to test ordersOrderUuidGet
        //instance.ordersOrderUuidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ordersPost', function() {
      it('should call ordersPost successfully', function(done) {
        //uncomment below and update the code to test ordersPost
        //instance.ordersPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentsBraintreeTokenPost', function() {
      it('should call paymentsBraintreeTokenPost successfully', function(done) {
        //uncomment below and update the code to test paymentsBraintreeTokenPost
        //instance.paymentsBraintreeTokenPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentsNoPaymentPost', function() {
      it('should call paymentsNoPaymentPost successfully', function(done) {
        //uncomment below and update the code to test paymentsNoPaymentPost
        //instance.paymentsNoPaymentPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentsStripeStoredSourceInfoGet', function() {
      it('should call paymentsStripeStoredSourceInfoGet successfully', function(done) {
        //uncomment below and update the code to test paymentsStripeStoredSourceInfoGet
        //instance.paymentsStripeStoredSourceInfoGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
