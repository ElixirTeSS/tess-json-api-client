/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * OpenAPI spec version: 0.2.0
 * Contact: tess-support@googlegroups.com
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
    factory(root.expect, root.TessJsonApi);
  }
}(this, function(expect, TessJsonApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TessJsonApi.WorkflowResource();
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

  describe('WorkflowResource', function() {
    it('should create an instance of WorkflowResource', function() {
      // uncomment below and update the code to test WorkflowResource
      //var instane = new TessJsonApi.WorkflowResource();
      //expect(instance).to.be.a(TessJsonApi.WorkflowResource);
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new TessJsonApi.WorkflowResource();
      //expect(instance).to.be();
    });

    it('should have the property relationships (base name: "relationships")', function() {
      // uncomment below and update the code to test the property relationships
      //var instane = new TessJsonApi.WorkflowResource();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new TessJsonApi.WorkflowResource();
      //expect(instance).to.be();
    });

  });

}));
