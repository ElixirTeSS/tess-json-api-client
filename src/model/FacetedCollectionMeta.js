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
    define(['ApiClient', 'model/Facet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Facet'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.FacetedCollectionMeta = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.Facet);
  }
}(this, function(ApiClient, Facet) {
  'use strict';




  /**
   * The FacetedCollectionMeta model module.
   * @module model/FacetedCollectionMeta
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>FacetedCollectionMeta</code>.
   * @alias module:model/FacetedCollectionMeta
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FacetedCollectionMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FacetedCollectionMeta} obj Optional instance to populate.
   * @return {module:model/FacetedCollectionMeta} The populated <code>FacetedCollectionMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('facets')) {
        obj['facets'] = ApiClient.convertToType(data['facets'], {'String': 'String'});
      }
      if (data.hasOwnProperty('available-facets')) {
        obj['available-facets'] = ApiClient.convertToType(data['available-facets'], {'String': Facet});
      }
    }
    return obj;
  }

  /**
   * Search keywords.
   * @member {String} query
   * @default ''
   */
  exports.prototype['query'] = '';
  /**
   * The filters that are currently applied to the collection.
   * @member {Object.<String, String>} facets
   */
  exports.prototype['facets'] = undefined;
  /**
   * The set of filters that are available to be applied to the collection.
   * @member {Object.<String, module:model/Facet>} available-facets
   */
  exports.prototype['available-facets'] = undefined;



  return exports;
}));


