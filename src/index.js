/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Collection from './model/Collection';
import CollectionAllOf from './model/CollectionAllOf';
import CollectionAttributes from './model/CollectionAttributes';
import CollectionCollection from './model/CollectionCollection';
import CollectionCollectionAllOf from './model/CollectionCollectionAllOf';
import CollectionResource from './model/CollectionResource';
import CollectionResourceAllOf from './model/CollectionResourceAllOf';
import ContentProvider from './model/ContentProvider';
import ContentProviderAllOf from './model/ContentProviderAllOf';
import ContentProviderAttributes from './model/ContentProviderAttributes';
import ContentProviderCollection from './model/ContentProviderCollection';
import ContentProviderCollectionAllOf from './model/ContentProviderCollectionAllOf';
import ContentProviderResource from './model/ContentProviderResource';
import ContentProviderResourceAllOf from './model/ContentProviderResourceAllOf';
import ContentProviderResourceAllOfRelationships from './model/ContentProviderResourceAllOfRelationships';
import Event from './model/Event';
import EventAllOf from './model/EventAllOf';
import EventAttributes from './model/EventAttributes';
import EventAttributesReport from './model/EventAttributesReport';
import EventCollection from './model/EventCollection';
import EventCollectionAllOf from './model/EventCollectionAllOf';
import EventResource from './model/EventResource';
import EventResourceAllOf from './model/EventResourceAllOf';
import EventResourceAllOfRelationships from './model/EventResourceAllOfRelationships';
import ExternalResource from './model/ExternalResource';
import Facet from './model/Facet';
import FacetedCollection from './model/FacetedCollection';
import FacetedCollectionAllOf from './model/FacetedCollectionAllOf';
import FacetedCollectionAllOfMeta from './model/FacetedCollectionAllOfMeta';
import JsonApiResponse from './model/JsonApiResponse';
import Links from './model/Links';
import Material from './model/Material';
import MaterialAllOf from './model/MaterialAllOf';
import MaterialAttributes from './model/MaterialAttributes';
import MaterialCollection from './model/MaterialCollection';
import MaterialCollectionAllOf from './model/MaterialCollectionAllOf';
import MaterialResource from './model/MaterialResource';
import MaterialResourceAllOf from './model/MaterialResourceAllOf';
import MaterialResourceAllOfRelationships from './model/MaterialResourceAllOfRelationships';
import MultiRelationshipObject from './model/MultiRelationshipObject';
import Node from './model/Node';
import NodeAllOf from './model/NodeAllOf';
import NodeAttributes from './model/NodeAttributes';
import NodeAttributesStaffInner from './model/NodeAttributesStaffInner';
import NodeCollection from './model/NodeCollection';
import NodeCollectionAllOf from './model/NodeCollectionAllOf';
import NodeResource from './model/NodeResource';
import NodeResourceAllOf from './model/NodeResourceAllOf';
import NodeResourceAllOfRelationships from './model/NodeResourceAllOfRelationships';
import OntologyTerm from './model/OntologyTerm';
import OptionalRelationshipObject from './model/OptionalRelationshipObject';
import OptionalResourceIdentifierObject from './model/OptionalResourceIdentifierObject';
import PaginationLinks from './model/PaginationLinks';
import ResourceIdentifierObject from './model/ResourceIdentifierObject';
import ResourceObject from './model/ResourceObject';
import ResourceObjectAllOf from './model/ResourceObjectAllOf';
import SingleRelationshipObject from './model/SingleRelationshipObject';
import User from './model/User';
import UserAllOf from './model/UserAllOf';
import UserAttributes from './model/UserAttributes';
import UserCollection from './model/UserCollection';
import UserCollectionAllOf from './model/UserCollectionAllOf';
import UserResource from './model/UserResource';
import UserResourceAllOf from './model/UserResourceAllOf';
import Workflow from './model/Workflow';
import WorkflowAllOf from './model/WorkflowAllOf';
import WorkflowAttributes from './model/WorkflowAttributes';
import WorkflowCollection from './model/WorkflowCollection';
import WorkflowCollectionAllOf from './model/WorkflowCollectionAllOf';
import WorkflowResource from './model/WorkflowResource';
import WorkflowResourceAllOf from './model/WorkflowResourceAllOf';
import WorkflowResourceAllOfRelationships from './model/WorkflowResourceAllOfRelationships';
import CollectionsApi from './api/CollectionsApi';
import ContentProvidersApi from './api/ContentProvidersApi';
import EventsApi from './api/EventsApi';
import MaterialsApi from './api/MaterialsApi';
import NodesApi from './api/NodesApi';
import UsersApi from './api/UsersApi';
import WorkflowsApi from './api/WorkflowsApi';


/**
* An implementation of the API for ELIXIR&#39;s TeSS, following JSON-API (http://jsonapi.org/) standards..<br>
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
* @version 1.4.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Collection model constructor.
     * @property {module:model/Collection}
     */
    Collection,

    /**
     * The CollectionAllOf model constructor.
     * @property {module:model/CollectionAllOf}
     */
    CollectionAllOf,

    /**
     * The CollectionAttributes model constructor.
     * @property {module:model/CollectionAttributes}
     */
    CollectionAttributes,

    /**
     * The CollectionCollection model constructor.
     * @property {module:model/CollectionCollection}
     */
    CollectionCollection,

    /**
     * The CollectionCollectionAllOf model constructor.
     * @property {module:model/CollectionCollectionAllOf}
     */
    CollectionCollectionAllOf,

    /**
     * The CollectionResource model constructor.
     * @property {module:model/CollectionResource}
     */
    CollectionResource,

    /**
     * The CollectionResourceAllOf model constructor.
     * @property {module:model/CollectionResourceAllOf}
     */
    CollectionResourceAllOf,

    /**
     * The ContentProvider model constructor.
     * @property {module:model/ContentProvider}
     */
    ContentProvider,

    /**
     * The ContentProviderAllOf model constructor.
     * @property {module:model/ContentProviderAllOf}
     */
    ContentProviderAllOf,

    /**
     * The ContentProviderAttributes model constructor.
     * @property {module:model/ContentProviderAttributes}
     */
    ContentProviderAttributes,

    /**
     * The ContentProviderCollection model constructor.
     * @property {module:model/ContentProviderCollection}
     */
    ContentProviderCollection,

    /**
     * The ContentProviderCollectionAllOf model constructor.
     * @property {module:model/ContentProviderCollectionAllOf}
     */
    ContentProviderCollectionAllOf,

    /**
     * The ContentProviderResource model constructor.
     * @property {module:model/ContentProviderResource}
     */
    ContentProviderResource,

    /**
     * The ContentProviderResourceAllOf model constructor.
     * @property {module:model/ContentProviderResourceAllOf}
     */
    ContentProviderResourceAllOf,

    /**
     * The ContentProviderResourceAllOfRelationships model constructor.
     * @property {module:model/ContentProviderResourceAllOfRelationships}
     */
    ContentProviderResourceAllOfRelationships,

    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event,

    /**
     * The EventAllOf model constructor.
     * @property {module:model/EventAllOf}
     */
    EventAllOf,

    /**
     * The EventAttributes model constructor.
     * @property {module:model/EventAttributes}
     */
    EventAttributes,

    /**
     * The EventAttributesReport model constructor.
     * @property {module:model/EventAttributesReport}
     */
    EventAttributesReport,

    /**
     * The EventCollection model constructor.
     * @property {module:model/EventCollection}
     */
    EventCollection,

    /**
     * The EventCollectionAllOf model constructor.
     * @property {module:model/EventCollectionAllOf}
     */
    EventCollectionAllOf,

    /**
     * The EventResource model constructor.
     * @property {module:model/EventResource}
     */
    EventResource,

    /**
     * The EventResourceAllOf model constructor.
     * @property {module:model/EventResourceAllOf}
     */
    EventResourceAllOf,

    /**
     * The EventResourceAllOfRelationships model constructor.
     * @property {module:model/EventResourceAllOfRelationships}
     */
    EventResourceAllOfRelationships,

    /**
     * The ExternalResource model constructor.
     * @property {module:model/ExternalResource}
     */
    ExternalResource,

    /**
     * The Facet model constructor.
     * @property {module:model/Facet}
     */
    Facet,

    /**
     * The FacetedCollection model constructor.
     * @property {module:model/FacetedCollection}
     */
    FacetedCollection,

    /**
     * The FacetedCollectionAllOf model constructor.
     * @property {module:model/FacetedCollectionAllOf}
     */
    FacetedCollectionAllOf,

    /**
     * The FacetedCollectionAllOfMeta model constructor.
     * @property {module:model/FacetedCollectionAllOfMeta}
     */
    FacetedCollectionAllOfMeta,

    /**
     * The JsonApiResponse model constructor.
     * @property {module:model/JsonApiResponse}
     */
    JsonApiResponse,

    /**
     * The Links model constructor.
     * @property {module:model/Links}
     */
    Links,

    /**
     * The Material model constructor.
     * @property {module:model/Material}
     */
    Material,

    /**
     * The MaterialAllOf model constructor.
     * @property {module:model/MaterialAllOf}
     */
    MaterialAllOf,

    /**
     * The MaterialAttributes model constructor.
     * @property {module:model/MaterialAttributes}
     */
    MaterialAttributes,

    /**
     * The MaterialCollection model constructor.
     * @property {module:model/MaterialCollection}
     */
    MaterialCollection,

    /**
     * The MaterialCollectionAllOf model constructor.
     * @property {module:model/MaterialCollectionAllOf}
     */
    MaterialCollectionAllOf,

    /**
     * The MaterialResource model constructor.
     * @property {module:model/MaterialResource}
     */
    MaterialResource,

    /**
     * The MaterialResourceAllOf model constructor.
     * @property {module:model/MaterialResourceAllOf}
     */
    MaterialResourceAllOf,

    /**
     * The MaterialResourceAllOfRelationships model constructor.
     * @property {module:model/MaterialResourceAllOfRelationships}
     */
    MaterialResourceAllOfRelationships,

    /**
     * The MultiRelationshipObject model constructor.
     * @property {module:model/MultiRelationshipObject}
     */
    MultiRelationshipObject,

    /**
     * The Node model constructor.
     * @property {module:model/Node}
     */
    Node,

    /**
     * The NodeAllOf model constructor.
     * @property {module:model/NodeAllOf}
     */
    NodeAllOf,

    /**
     * The NodeAttributes model constructor.
     * @property {module:model/NodeAttributes}
     */
    NodeAttributes,

    /**
     * The NodeAttributesStaffInner model constructor.
     * @property {module:model/NodeAttributesStaffInner}
     */
    NodeAttributesStaffInner,

    /**
     * The NodeCollection model constructor.
     * @property {module:model/NodeCollection}
     */
    NodeCollection,

    /**
     * The NodeCollectionAllOf model constructor.
     * @property {module:model/NodeCollectionAllOf}
     */
    NodeCollectionAllOf,

    /**
     * The NodeResource model constructor.
     * @property {module:model/NodeResource}
     */
    NodeResource,

    /**
     * The NodeResourceAllOf model constructor.
     * @property {module:model/NodeResourceAllOf}
     */
    NodeResourceAllOf,

    /**
     * The NodeResourceAllOfRelationships model constructor.
     * @property {module:model/NodeResourceAllOfRelationships}
     */
    NodeResourceAllOfRelationships,

    /**
     * The OntologyTerm model constructor.
     * @property {module:model/OntologyTerm}
     */
    OntologyTerm,

    /**
     * The OptionalRelationshipObject model constructor.
     * @property {module:model/OptionalRelationshipObject}
     */
    OptionalRelationshipObject,

    /**
     * The OptionalResourceIdentifierObject model constructor.
     * @property {module:model/OptionalResourceIdentifierObject}
     */
    OptionalResourceIdentifierObject,

    /**
     * The PaginationLinks model constructor.
     * @property {module:model/PaginationLinks}
     */
    PaginationLinks,

    /**
     * The ResourceIdentifierObject model constructor.
     * @property {module:model/ResourceIdentifierObject}
     */
    ResourceIdentifierObject,

    /**
     * The ResourceObject model constructor.
     * @property {module:model/ResourceObject}
     */
    ResourceObject,

    /**
     * The ResourceObjectAllOf model constructor.
     * @property {module:model/ResourceObjectAllOf}
     */
    ResourceObjectAllOf,

    /**
     * The SingleRelationshipObject model constructor.
     * @property {module:model/SingleRelationshipObject}
     */
    SingleRelationshipObject,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserAllOf model constructor.
     * @property {module:model/UserAllOf}
     */
    UserAllOf,

    /**
     * The UserAttributes model constructor.
     * @property {module:model/UserAttributes}
     */
    UserAttributes,

    /**
     * The UserCollection model constructor.
     * @property {module:model/UserCollection}
     */
    UserCollection,

    /**
     * The UserCollectionAllOf model constructor.
     * @property {module:model/UserCollectionAllOf}
     */
    UserCollectionAllOf,

    /**
     * The UserResource model constructor.
     * @property {module:model/UserResource}
     */
    UserResource,

    /**
     * The UserResourceAllOf model constructor.
     * @property {module:model/UserResourceAllOf}
     */
    UserResourceAllOf,

    /**
     * The Workflow model constructor.
     * @property {module:model/Workflow}
     */
    Workflow,

    /**
     * The WorkflowAllOf model constructor.
     * @property {module:model/WorkflowAllOf}
     */
    WorkflowAllOf,

    /**
     * The WorkflowAttributes model constructor.
     * @property {module:model/WorkflowAttributes}
     */
    WorkflowAttributes,

    /**
     * The WorkflowCollection model constructor.
     * @property {module:model/WorkflowCollection}
     */
    WorkflowCollection,

    /**
     * The WorkflowCollectionAllOf model constructor.
     * @property {module:model/WorkflowCollectionAllOf}
     */
    WorkflowCollectionAllOf,

    /**
     * The WorkflowResource model constructor.
     * @property {module:model/WorkflowResource}
     */
    WorkflowResource,

    /**
     * The WorkflowResourceAllOf model constructor.
     * @property {module:model/WorkflowResourceAllOf}
     */
    WorkflowResourceAllOf,

    /**
     * The WorkflowResourceAllOfRelationships model constructor.
     * @property {module:model/WorkflowResourceAllOfRelationships}
     */
    WorkflowResourceAllOfRelationships,

    /**
    * The CollectionsApi service constructor.
    * @property {module:api/CollectionsApi}
    */
    CollectionsApi,

    /**
    * The ContentProvidersApi service constructor.
    * @property {module:api/ContentProvidersApi}
    */
    ContentProvidersApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The MaterialsApi service constructor.
    * @property {module:api/MaterialsApi}
    */
    MaterialsApi,

    /**
    * The NodesApi service constructor.
    * @property {module:api/NodesApi}
    */
    NodesApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The WorkflowsApi service constructor.
    * @property {module:api/WorkflowsApi}
    */
    WorkflowsApi
};
