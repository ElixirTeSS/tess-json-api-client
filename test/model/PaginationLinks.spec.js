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
    describe('PaginationLinks', function() {
      beforeEach(function() {
        instance = new TessJsonApi.PaginationLinks();
      });

      it('should create an instance of PaginationLinks', function() {
        // TODO: update the code to test PaginationLinks
        expect(instance).to.be.a(TessJsonApi.PaginationLinks);
      });

      it('should have the property prev (base name: "prev")', function() {
        // TODO: update the code to test the property prev
        expect(instance).to.have.property('prev');
        // expect(instance.prev).to.be(expectedValueLiteral);
      });

      it('should have the property next (base name: "next")', function() {
        // TODO: update the code to test the property next
        expect(instance).to.have.property('next');
        // expect(instance.next).to.be(expectedValueLiteral);
      });

      it('should have the property first (base name: "first")', function() {
        // TODO: update the code to test the property first
        expect(instance).to.have.property('first');
        // expect(instance.first).to.be(expectedValueLiteral);
      });

      it('should have the property last (base name: "last")', function() {
        // TODO: update the code to test the property last
        expect(instance).to.have.property('last');
        // expect(instance.last).to.be(expectedValueLiteral);
      });

    });
  });

}));
