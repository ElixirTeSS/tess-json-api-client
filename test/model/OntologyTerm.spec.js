/*
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * OpenAPI spec version: 0.2.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.27
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

  describe('(package)', function() {
    describe('OntologyTerm', function() {
      beforeEach(function() {
        instance = new TessJsonApi.OntologyTerm();
      });

      it('should create an instance of OntologyTerm', function() {
        // TODO: update the code to test OntologyTerm
        expect(instance).to.be.a(TessJsonApi.OntologyTerm);
      });

      it('should have the property preferredLabel (base name: "preferred-label")', function() {
        // TODO: update the code to test the property preferredLabel
        expect(instance).to.have.property('preferredLabel');
        // expect(instance.preferredLabel).to.be(expectedValueLiteral);
      });

      it('should have the property uri (base name: "uri")', function() {
        // TODO: update the code to test the property uri
        expect(instance).to.have.property('uri');
        // expect(instance.uri).to.be(expectedValueLiteral);
      });

    });
  });

}));
