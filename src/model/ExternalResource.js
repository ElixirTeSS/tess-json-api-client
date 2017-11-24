/**
 * TeSS JSON-API
 * Testing the JSON-API API for TeSS. 
 *
 * OpenAPI spec version: 0.0.1
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.ExternalResource = factory(root.TessJsonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExternalResource model module.
   * @module model/ExternalResource
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ExternalResource</code>.
   * @alias module:model/ExternalResource
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ExternalResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalResource} obj Optional instance to populate.
   * @return {module:model/ExternalResource} The populated <code>ExternalResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('api_url')) {
        obj['api_url'] = ApiClient.convertToType(data['api_url'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Title of the external resource
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * A URL that resolves to a description of an external resource or the external resource itself.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * The date the association was created between this resource and the external resource within TeSS.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The date the association was last update between this resource and the external resource within TeSS.
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * A URL that resolves to more information about the external resource represented in a common exchange format (e.g. JSON or XML)
   * @member {String} api_url
   */
  exports.prototype['api_url'] = undefined;
  /**
   * The type of external resource. This can be 'tool', 'database, policy or standard' for bio.tools and bio.sharing respectively or any other resource type name for other external resources.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


