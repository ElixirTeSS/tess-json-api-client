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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SingleRelationshipObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SingleRelationshipObject'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.WorkflowResourceRelationships = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.SingleRelationshipObject);
  }
}(this, function(ApiClient, SingleRelationshipObject) {
  'use strict';




  /**
   * The WorkflowResourceRelationships model module.
   * @module model/WorkflowResourceRelationships
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>WorkflowResourceRelationships</code>.
   * @alias module:model/WorkflowResourceRelationships
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WorkflowResourceRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowResourceRelationships} obj Optional instance to populate.
   * @return {module:model/WorkflowResourceRelationships} The populated <code>WorkflowResourceRelationships</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = SingleRelationshipObject.constructFromObject(data['user']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/SingleRelationshipObject} user
   */
  exports.prototype['user'] = undefined;



  return exports;
}));


