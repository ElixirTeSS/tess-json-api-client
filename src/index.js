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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResource', 'model/Event', 'model/EventAttributes', 'model/EventCollection', 'model/EventResource', 'model/EventResourceRelationships', 'model/EventResourceRelationshipsNodes', 'model/EventResourceRelationshipsUser', 'model/Facet', 'model/FacetedCollection', 'model/FacetedCollectionMeta', 'model/Links', 'model/PaginationLinks', 'model/ScientificTopic', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ApiResource'), require('./model/Event'), require('./model/EventAttributes'), require('./model/EventCollection'), require('./model/EventResource'), require('./model/EventResourceRelationships'), require('./model/EventResourceRelationshipsNodes'), require('./model/EventResourceRelationshipsUser'), require('./model/Facet'), require('./model/FacetedCollection'), require('./model/FacetedCollectionMeta'), require('./model/Links'), require('./model/PaginationLinks'), require('./model/ScientificTopic'), require('./api/DefaultApi'));
  }
}(function(ApiClient, ApiResource, Event, EventAttributes, EventCollection, EventResource, EventResourceRelationships, EventResourceRelationshipsNodes, EventResourceRelationshipsUser, Facet, FacetedCollection, FacetedCollectionMeta, Links, PaginationLinks, ScientificTopic, DefaultApi) {
  'use strict';

  /**
   * Testing_the_JSON_API_API_for_TeSS_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var TessJsonApi = require('index'); // See note below*.
   * var xxxSvc = new TessJsonApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new TessJsonApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new TessJsonApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new TessJsonApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ApiResource model constructor.
     * @property {module:model/ApiResource}
     */
    ApiResource: ApiResource,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The EventAttributes model constructor.
     * @property {module:model/EventAttributes}
     */
    EventAttributes: EventAttributes,
    /**
     * The EventCollection model constructor.
     * @property {module:model/EventCollection}
     */
    EventCollection: EventCollection,
    /**
     * The EventResource model constructor.
     * @property {module:model/EventResource}
     */
    EventResource: EventResource,
    /**
     * The EventResourceRelationships model constructor.
     * @property {module:model/EventResourceRelationships}
     */
    EventResourceRelationships: EventResourceRelationships,
    /**
     * The EventResourceRelationshipsNodes model constructor.
     * @property {module:model/EventResourceRelationshipsNodes}
     */
    EventResourceRelationshipsNodes: EventResourceRelationshipsNodes,
    /**
     * The EventResourceRelationshipsUser model constructor.
     * @property {module:model/EventResourceRelationshipsUser}
     */
    EventResourceRelationshipsUser: EventResourceRelationshipsUser,
    /**
     * The Facet model constructor.
     * @property {module:model/Facet}
     */
    Facet: Facet,
    /**
     * The FacetedCollection model constructor.
     * @property {module:model/FacetedCollection}
     */
    FacetedCollection: FacetedCollection,
    /**
     * The FacetedCollectionMeta model constructor.
     * @property {module:model/FacetedCollectionMeta}
     */
    FacetedCollectionMeta: FacetedCollectionMeta,
    /**
     * The Links model constructor.
     * @property {module:model/Links}
     */
    Links: Links,
    /**
     * The PaginationLinks model constructor.
     * @property {module:model/PaginationLinks}
     */
    PaginationLinks: PaginationLinks,
    /**
     * The ScientificTopic model constructor.
     * @property {module:model/ScientificTopic}
     */
    ScientificTopic: ScientificTopic,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
