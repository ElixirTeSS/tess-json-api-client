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
 * Swagger Codegen version: 1.0.12-1
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
    define(['ApiClient', 'model/ContentProviderAttributes', 'model/ContentProviderResourceRelationships', 'model/Links', 'model/ResourceObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentProviderAttributes'), require('./ContentProviderResourceRelationships'), require('./Links'), require('./ResourceObject'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.ContentProviderResource = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.ContentProviderAttributes, root.TessJsonApi.ContentProviderResourceRelationships, root.TessJsonApi.Links, root.TessJsonApi.ResourceObject);
  }
}(this, function(ApiClient, ContentProviderAttributes, ContentProviderResourceRelationships, Links, ResourceObject) {
  'use strict';




  /**
   * The ContentProviderResource model module.
   * @module model/ContentProviderResource
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>ContentProviderResource</code>.
   * @alias module:model/ContentProviderResource
   * @class
   * @extends module:model/ResourceObject
   */
  var exports = function() {
    var _this = this;
    ResourceObject.call(_this);


  };

  /**
   * Constructs a <code>ContentProviderResource</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentProviderResource} obj Optional instance to populate.
   * @return {module:model/ContentProviderResource} The populated <code>ContentProviderResource</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ResourceObject.constructFromObject(data, obj);
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ContentProviderAttributes.constructFromObject(data['attributes']);
      }
      if (data.hasOwnProperty('relationships')) {
        obj['relationships'] = ContentProviderResourceRelationships.constructFromObject(data['relationships']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(ResourceObject.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:model/ContentProviderAttributes} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * @member {module:model/ContentProviderResourceRelationships} relationships
   */
  exports.prototype['relationships'] = undefined;



  return exports;
}));


