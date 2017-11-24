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
    define(['ApiClient', 'model/Links', 'model/ResourceObject', 'model/UserAttributes'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'), require('./ResourceObject'), require('./UserAttributes'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.UserResource = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.Links, root.TessJsonApi.ResourceObject, root.TessJsonApi.UserAttributes);
  }
}(this, function(ApiClient, Links, ResourceObject, UserAttributes) {
  'use strict';




  /**
   * The UserResource model module.
   * @module model/UserResource
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UserResource</code>.
   * @alias module:model/UserResource
   * @class
   * @extends module:model/ResourceObject
   */
  var exports = function() {
    var _this = this;
    ResourceObject.call(_this);

  };

  /**
   * Constructs a <code>UserResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserResource} obj Optional instance to populate.
   * @return {module:model/UserResource} The populated <code>UserResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ResourceObject.constructFromObject(data, obj);
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = UserAttributes.constructFromObject(data['attributes']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(ResourceObject.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/UserAttributes} attributes
   */
  exports.prototype['attributes'] = undefined;



  return exports;
}));


