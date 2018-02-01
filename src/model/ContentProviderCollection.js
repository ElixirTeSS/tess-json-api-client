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
    define(['ApiClient', 'model/ContentProviderResource', 'model/FacetedCollection', 'model/FacetedCollectionMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentProviderResource'), require('./FacetedCollection'), require('./FacetedCollectionMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.ContentProviderCollection = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.ContentProviderResource, root.TessJsonApi.FacetedCollection, root.TessJsonApi.FacetedCollectionMeta);
  }
}(this, function(ApiClient, ContentProviderResource, FacetedCollection, FacetedCollectionMeta) {
  'use strict';




  /**
   * The ContentProviderCollection model module.
   * @module model/ContentProviderCollection
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ContentProviderCollection</code>.
   * @alias module:model/ContentProviderCollection
   * @class
   * @extends module:model/FacetedCollection
   */
  var exports = function() {
    var _this = this;
    FacetedCollection.call(_this);

  };

  /**
   * Constructs a <code>ContentProviderCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentProviderCollection} obj Optional instance to populate.
   * @return {module:model/ContentProviderCollection} The populated <code>ContentProviderCollection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      FacetedCollection.constructFromObject(data, obj);
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [ContentProviderResource]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(FacetedCollection.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Array.<module:model/ContentProviderResource>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


