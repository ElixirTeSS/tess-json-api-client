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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.JsonApiResponse = factory(root.TessJsonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The JsonApiResponse model module.
   * @module model/JsonApiResponse
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>JsonApiResponse</code>.
   * @alias module:model/JsonApiResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>JsonApiResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiResponse} obj Optional instance to populate.
   * @return {module:model/JsonApiResponse} The populated <code>JsonApiResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('errors'))
        obj.errors = ApiClient.convertToType(data['errors'], Object);
      if (data.hasOwnProperty('meta'))
        obj.meta = ApiClient.convertToType(data['meta'], Object);
      if (data.hasOwnProperty('links'))
        obj.links = ApiClient.convertToType(data['links'], Object);
      if (data.hasOwnProperty('included'))
        obj.included = ApiClient.convertToType(data['included'], Object);
      if (data.hasOwnProperty('jsonapi'))
        obj.jsonapi = ApiClient.convertToType(data['jsonapi'], Object);
    }
    return obj;
  }

  /**
   * @member {Object} errors
   */
  exports.prototype.errors = undefined;

  /**
   * @member {Object} meta
   */
  exports.prototype.meta = undefined;

  /**
   * @member {Object} links
   */
  exports.prototype.links = undefined;

  /**
   * @member {Object} included
   */
  exports.prototype.included = undefined;

  /**
   * @member {Object} jsonapi
   */
  exports.prototype.jsonapi = undefined;


  return exports;

}));
