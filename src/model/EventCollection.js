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
    define(['ApiClient', 'model/Event', 'model/FacetedCollection', 'model/FacetedCollectionMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Event'), require('./FacetedCollection'), require('./FacetedCollectionMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.EventCollection = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.Event, root.TessJsonApi.FacetedCollection, root.TessJsonApi.FacetedCollectionMeta);
  }
}(this, function(ApiClient, Event, FacetedCollection, FacetedCollectionMeta) {
  'use strict';




  /**
   * The EventCollection model module.
   * @module model/EventCollection
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>EventCollection</code>.
   * @alias module:model/EventCollection
   * @class
   * @extends module:model/FacetedCollection
   */
  var exports = function() {
    var _this = this;
    FacetedCollection.call(_this);

  };

  /**
   * Constructs a <code>EventCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventCollection} obj Optional instance to populate.
   * @return {module:model/EventCollection} The populated <code>EventCollection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      FacetedCollection.constructFromObject(data, obj);
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [Event]);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(FacetedCollection.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {Array.<module:model/Event>} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


