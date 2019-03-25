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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ContentProvider', 'model/ContentProviderAttributes', 'model/ContentProviderCollection', 'model/ContentProviderResource', 'model/ContentProviderResourceRelationships', 'model/Event', 'model/EventAttributes', 'model/EventAttributesReport', 'model/EventCollection', 'model/EventResource', 'model/EventResourceRelationships', 'model/ExternalResource', 'model/Facet', 'model/FacetedCollection', 'model/FacetedCollectionMeta', 'model/JsonApiResponse', 'model/Links', 'model/Material', 'model/MaterialAttributes', 'model/MaterialCollection', 'model/MaterialResource', 'model/MultiRelationshipObject', 'model/OntologyTerm', 'model/PaginationLinks', 'model/ResourceIdentifierObject', 'model/ResourceObject', 'model/SingleRelationshipObject', 'model/User', 'model/UserAttributes', 'model/UserCollection', 'model/UserResource', 'model/Workflow', 'model/WorkflowAttributes', 'model/WorkflowCollection', 'model/WorkflowResource', 'model/WorkflowResourceRelationships', 'api/ContentProvidersApi', 'api/EventsApi', 'api/MaterialsApi', 'api/UsersApi', 'api/WorkflowsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ContentProvider'), require('./model/ContentProviderAttributes'), require('./model/ContentProviderCollection'), require('./model/ContentProviderResource'), require('./model/ContentProviderResourceRelationships'), require('./model/Event'), require('./model/EventAttributes'), require('./model/EventAttributesReport'), require('./model/EventCollection'), require('./model/EventResource'), require('./model/EventResourceRelationships'), require('./model/ExternalResource'), require('./model/Facet'), require('./model/FacetedCollection'), require('./model/FacetedCollectionMeta'), require('./model/JsonApiResponse'), require('./model/Links'), require('./model/Material'), require('./model/MaterialAttributes'), require('./model/MaterialCollection'), require('./model/MaterialResource'), require('./model/MultiRelationshipObject'), require('./model/OntologyTerm'), require('./model/PaginationLinks'), require('./model/ResourceIdentifierObject'), require('./model/ResourceObject'), require('./model/SingleRelationshipObject'), require('./model/User'), require('./model/UserAttributes'), require('./model/UserCollection'), require('./model/UserResource'), require('./model/Workflow'), require('./model/WorkflowAttributes'), require('./model/WorkflowCollection'), require('./model/WorkflowResource'), require('./model/WorkflowResourceRelationships'), require('./api/ContentProvidersApi'), require('./api/EventsApi'), require('./api/MaterialsApi'), require('./api/UsersApi'), require('./api/WorkflowsApi'));
  }
}(function(ApiClient, ContentProvider, ContentProviderAttributes, ContentProviderCollection, ContentProviderResource, ContentProviderResourceRelationships, Event, EventAttributes, EventAttributesReport, EventCollection, EventResource, EventResourceRelationships, ExternalResource, Facet, FacetedCollection, FacetedCollectionMeta, JsonApiResponse, Links, Material, MaterialAttributes, MaterialCollection, MaterialResource, MultiRelationshipObject, OntologyTerm, PaginationLinks, ResourceIdentifierObject, ResourceObject, SingleRelationshipObject, User, UserAttributes, UserCollection, UserResource, Workflow, WorkflowAttributes, WorkflowCollection, WorkflowResource, WorkflowResourceRelationships, ContentProvidersApi, EventsApi, MaterialsApi, UsersApi, WorkflowsApi) {
  'use strict';

  /**
   * An_implementation_of_the_API_for_ELIXIRs_TeSS_following_JSON_API__httpjsonapi_org_standards_.<br>
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
   * @version 0.2.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ContentProvider model constructor.
     * @property {module:model/ContentProvider}
     */
    ContentProvider: ContentProvider,
    /**
     * The ContentProviderAttributes model constructor.
     * @property {module:model/ContentProviderAttributes}
     */
    ContentProviderAttributes: ContentProviderAttributes,
    /**
     * The ContentProviderCollection model constructor.
     * @property {module:model/ContentProviderCollection}
     */
    ContentProviderCollection: ContentProviderCollection,
    /**
     * The ContentProviderResource model constructor.
     * @property {module:model/ContentProviderResource}
     */
    ContentProviderResource: ContentProviderResource,
    /**
     * The ContentProviderResourceRelationships model constructor.
     * @property {module:model/ContentProviderResourceRelationships}
     */
    ContentProviderResourceRelationships: ContentProviderResourceRelationships,
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
     * The EventAttributesReport model constructor.
     * @property {module:model/EventAttributesReport}
     */
    EventAttributesReport: EventAttributesReport,
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
     * The ExternalResource model constructor.
     * @property {module:model/ExternalResource}
     */
    ExternalResource: ExternalResource,
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
     * The JsonApiResponse model constructor.
     * @property {module:model/JsonApiResponse}
     */
    JsonApiResponse: JsonApiResponse,
    /**
     * The Links model constructor.
     * @property {module:model/Links}
     */
    Links: Links,
    /**
     * The Material model constructor.
     * @property {module:model/Material}
     */
    Material: Material,
    /**
     * The MaterialAttributes model constructor.
     * @property {module:model/MaterialAttributes}
     */
    MaterialAttributes: MaterialAttributes,
    /**
     * The MaterialCollection model constructor.
     * @property {module:model/MaterialCollection}
     */
    MaterialCollection: MaterialCollection,
    /**
     * The MaterialResource model constructor.
     * @property {module:model/MaterialResource}
     */
    MaterialResource: MaterialResource,
    /**
     * The MultiRelationshipObject model constructor.
     * @property {module:model/MultiRelationshipObject}
     */
    MultiRelationshipObject: MultiRelationshipObject,
    /**
     * The OntologyTerm model constructor.
     * @property {module:model/OntologyTerm}
     */
    OntologyTerm: OntologyTerm,
    /**
     * The PaginationLinks model constructor.
     * @property {module:model/PaginationLinks}
     */
    PaginationLinks: PaginationLinks,
    /**
     * The ResourceIdentifierObject model constructor.
     * @property {module:model/ResourceIdentifierObject}
     */
    ResourceIdentifierObject: ResourceIdentifierObject,
    /**
     * The ResourceObject model constructor.
     * @property {module:model/ResourceObject}
     */
    ResourceObject: ResourceObject,
    /**
     * The SingleRelationshipObject model constructor.
     * @property {module:model/SingleRelationshipObject}
     */
    SingleRelationshipObject: SingleRelationshipObject,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserAttributes model constructor.
     * @property {module:model/UserAttributes}
     */
    UserAttributes: UserAttributes,
    /**
     * The UserCollection model constructor.
     * @property {module:model/UserCollection}
     */
    UserCollection: UserCollection,
    /**
     * The UserResource model constructor.
     * @property {module:model/UserResource}
     */
    UserResource: UserResource,
    /**
     * The Workflow model constructor.
     * @property {module:model/Workflow}
     */
    Workflow: Workflow,
    /**
     * The WorkflowAttributes model constructor.
     * @property {module:model/WorkflowAttributes}
     */
    WorkflowAttributes: WorkflowAttributes,
    /**
     * The WorkflowCollection model constructor.
     * @property {module:model/WorkflowCollection}
     */
    WorkflowCollection: WorkflowCollection,
    /**
     * The WorkflowResource model constructor.
     * @property {module:model/WorkflowResource}
     */
    WorkflowResource: WorkflowResource,
    /**
     * The WorkflowResourceRelationships model constructor.
     * @property {module:model/WorkflowResourceRelationships}
     */
    WorkflowResourceRelationships: WorkflowResourceRelationships,
    /**
     * The ContentProvidersApi service constructor.
     * @property {module:api/ContentProvidersApi}
     */
    ContentProvidersApi: ContentProvidersApi,
    /**
     * The EventsApi service constructor.
     * @property {module:api/EventsApi}
     */
    EventsApi: EventsApi,
    /**
     * The MaterialsApi service constructor.
     * @property {module:api/MaterialsApi}
     */
    MaterialsApi: MaterialsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi,
    /**
     * The WorkflowsApi service constructor.
     * @property {module:api/WorkflowsApi}
     */
    WorkflowsApi: WorkflowsApi
  };

  return exports;
}));
