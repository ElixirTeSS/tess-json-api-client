/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * OpenAPI spec version: 0.2.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
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
    factory(root.expect, root.TessJsonApi);
  }
}(this, function(expect, TessJsonApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TessJsonApi.UserAttributes();
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

  describe('UserAttributes', function() {
    it('should create an instance of UserAttributes', function() {
      // uncomment below and update the code to test UserAttributes
      //var instance = new TessJsonApi.UserAttributes();
      //expect(instance).to.be.a(TessJsonApi.UserAttributes);
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instance = new TessJsonApi.UserAttributes();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instance = new TessJsonApi.UserAttributes();
      //expect(instance).to.be();
    });

    it('should have the property surname (base name: "surname")', function() {
      // uncomment below and update the code to test the property surname
      //var instance = new TessJsonApi.UserAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created-at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new TessJsonApi.UserAttributes();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated-at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new TessJsonApi.UserAttributes();
      //expect(instance).to.be();
    });

  });

}));
