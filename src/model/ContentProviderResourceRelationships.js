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
    define(['ApiClient', 'model/MultiRelationshipObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MultiRelationshipObject'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.ContentProviderResourceRelationships = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.MultiRelationshipObject);
  }
}(this, function(ApiClient, MultiRelationshipObject) {
  'use strict';




  /**
   * The ContentProviderResourceRelationships model module.
   * @module model/ContentProviderResourceRelationships
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>ContentProviderResourceRelationships</code>.
   * @alias module:model/ContentProviderResourceRelationships
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ContentProviderResourceRelationships</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentProviderResourceRelationships} obj Optional instance to populate.
   * @return {module:model/ContentProviderResourceRelationships} The populated <code>ContentProviderResourceRelationships</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('events')) {
        obj['events'] = MultiRelationshipObject.constructFromObject(data['events']);
      }
      if (data.hasOwnProperty('materials')) {
        obj['materials'] = MultiRelationshipObject.constructFromObject(data['materials']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MultiRelationshipObject} events
   */
  exports.prototype['events'] = undefined;
  /**
   * @member {module:model/MultiRelationshipObject} materials
   */
  exports.prototype['materials'] = undefined;



  return exports;
}));


