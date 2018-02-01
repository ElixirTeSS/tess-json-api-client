/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.11
 *
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResourceIdentifierObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ResourceIdentifierObject'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.MultiRelationshipObject = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.ResourceIdentifierObject);
  }
}(this, function(ApiClient, ResourceIdentifierObject) {
  'use strict';




  /**
   * The MultiRelationshipObject model module.
   * @module model/MultiRelationshipObject
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>MultiRelationshipObject</code>.
   * @alias module:model/MultiRelationshipObject
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MultiRelationshipObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MultiRelationshipObject} obj Optional instance to populate.
   * @return {module:model/MultiRelationshipObject} The populated <code>MultiRelationshipObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], Object);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [ResourceIdentifierObject]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} links
   */
  exports.prototype['links'] = undefined;
  /**
   * @member {Array.<module:model/ResourceIdentifierObject>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Object} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


