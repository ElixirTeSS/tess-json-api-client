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
    define(['ApiClient', 'model/JsonApiResponse', 'model/MaterialResource'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JsonApiResponse'), require('./MaterialResource'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.Material = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.JsonApiResponse, root.TessJsonApi.MaterialResource);
  }
}(this, function(ApiClient, JsonApiResponse, MaterialResource) {
  'use strict';

  /**
   * The Material model module.
   * @module model/Material
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>Material</code>.
   * @alias module:model/Material
   * @class
   * @extends module:model/JsonApiResponse
   */
  var exports = function() {
    JsonApiResponse.call(this);
  };

  /**
   * Constructs a <code>Material</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Material} obj Optional instance to populate.
   * @return {module:model/Material} The populated <code>Material</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      JsonApiResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('data'))
        obj.data = MaterialResource.constructFromObject(data['data']);
    }
    return obj;
  }

  exports.prototype = Object.create(JsonApiResponse.prototype);
  exports.prototype.constructor = exports;
  /**
   * @member {module:model/MaterialResource} data
   */
  exports.prototype.data = undefined;


  return exports;

}));
