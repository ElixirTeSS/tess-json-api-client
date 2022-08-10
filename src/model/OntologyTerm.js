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
    root.TessJsonApi.OntologyTerm = factory(root.TessJsonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OntologyTerm model module.
   * @module model/OntologyTerm
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>OntologyTerm</code>.
   * @alias module:model/OntologyTerm
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OntologyTerm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OntologyTerm} obj Optional instance to populate.
   * @return {module:model/OntologyTerm} The populated <code>OntologyTerm</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('preferred-label'))
        obj.preferredLabel = ApiClient.convertToType(data['preferred-label'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} preferredLabel
   */
  exports.prototype.preferredLabel = undefined;

  /**
   * @member {String} uri
   */
  exports.prototype.uri = undefined;


  return exports;

}));
