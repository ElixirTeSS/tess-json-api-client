/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TessJsonApi);
  }
}(this, function(expect, TessJsonApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TessJsonApi.NodeResourceAllOfRelationships();
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

  describe('NodeResourceAllOfRelationships', function() {
    it('should create an instance of NodeResourceAllOfRelationships', function() {
      // uncomment below and update the code to test NodeResourceAllOfRelationships
      //var instance = new TessJsonApi.NodeResourceAllOfRelationships();
      //expect(instance).to.be.a(TessJsonApi.NodeResourceAllOfRelationships);
    });

    it('should have the property events (base name: "events")', function() {
      // uncomment below and update the code to test the property events
      //var instance = new TessJsonApi.NodeResourceAllOfRelationships();
      //expect(instance).to.be();
    });

    it('should have the property materials (base name: "materials")', function() {
      // uncomment below and update the code to test the property materials
      //var instance = new TessJsonApi.NodeResourceAllOfRelationships();
      //expect(instance).to.be();
    });

    it('should have the property contentProviders (base name: "content-providers")', function() {
      // uncomment below and update the code to test the property contentProviders
      //var instance = new TessJsonApi.NodeResourceAllOfRelationships();
      //expect(instance).to.be();
    });

  });

}));