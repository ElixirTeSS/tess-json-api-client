# tess_json_api

TessJsonApi - JavaScript client for tess_json_api
An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.3.0
- Package version: 1.3.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install tess_json_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your tess_json_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TessJsonApi = require('tess_json_api');


var api = new TessJsonApi.CollectionsApi()
var opts = {
  'q': "q_example", // {String} Search keywords.
  'pageNumber': 1, // {Number} The page of the collection index to view.
  'pageSize': 30, // {Number} The number of results to return per page.
  'sort': "sort_example", // {String} Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'keywords': ["null"] // {[String]} Filter by keywords.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.collectionsGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://tess.elixir-europe.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TessJsonApi.CollectionsApi* | [**collectionsGet**](docs/CollectionsApi.md#collectionsGet) | **GET** /collections | 
*TessJsonApi.CollectionsApi* | [**collectionsSlugGet**](docs/CollectionsApi.md#collectionsSlugGet) | **GET** /collections/{slug} | 
*TessJsonApi.ContentProvidersApi* | [**contentProvidersGet**](docs/ContentProvidersApi.md#contentProvidersGet) | **GET** /content_providers | 
*TessJsonApi.ContentProvidersApi* | [**contentProvidersSlugGet**](docs/ContentProvidersApi.md#contentProvidersSlugGet) | **GET** /content_providers/{slug} | 
*TessJsonApi.EventsApi* | [**eventsGet**](docs/EventsApi.md#eventsGet) | **GET** /events | 
*TessJsonApi.EventsApi* | [**eventsSlugGet**](docs/EventsApi.md#eventsSlugGet) | **GET** /events/{slug} | 
*TessJsonApi.MaterialsApi* | [**materialsGet**](docs/MaterialsApi.md#materialsGet) | **GET** /materials | 
*TessJsonApi.MaterialsApi* | [**materialsSlugGet**](docs/MaterialsApi.md#materialsSlugGet) | **GET** /materials/{slug} | 
*TessJsonApi.NodesApi* | [**nodesGet**](docs/NodesApi.md#nodesGet) | **GET** /nodes | 
*TessJsonApi.NodesApi* | [**nodesSlugGet**](docs/NodesApi.md#nodesSlugGet) | **GET** /nodes/{slug} | 
*TessJsonApi.UsersApi* | [**usersGet**](docs/UsersApi.md#usersGet) | **GET** /users | 
*TessJsonApi.UsersApi* | [**usersSlugGet**](docs/UsersApi.md#usersSlugGet) | **GET** /users/{slug} | 
*TessJsonApi.WorkflowsApi* | [**workflowsGet**](docs/WorkflowsApi.md#workflowsGet) | **GET** /workflows | 
*TessJsonApi.WorkflowsApi* | [**workflowsSlugGet**](docs/WorkflowsApi.md#workflowsSlugGet) | **GET** /workflows/{slug} | 


## Documentation for Models

 - [TessJsonApi.Collection](docs/Collection.md)
 - [TessJsonApi.CollectionAllOf](docs/CollectionAllOf.md)
 - [TessJsonApi.CollectionAttributes](docs/CollectionAttributes.md)
 - [TessJsonApi.CollectionCollection](docs/CollectionCollection.md)
 - [TessJsonApi.CollectionCollectionAllOf](docs/CollectionCollectionAllOf.md)
 - [TessJsonApi.CollectionResource](docs/CollectionResource.md)
 - [TessJsonApi.CollectionResourceAllOf](docs/CollectionResourceAllOf.md)
 - [TessJsonApi.ContentProvider](docs/ContentProvider.md)
 - [TessJsonApi.ContentProviderAllOf](docs/ContentProviderAllOf.md)
 - [TessJsonApi.ContentProviderAttributes](docs/ContentProviderAttributes.md)
 - [TessJsonApi.ContentProviderCollection](docs/ContentProviderCollection.md)
 - [TessJsonApi.ContentProviderCollectionAllOf](docs/ContentProviderCollectionAllOf.md)
 - [TessJsonApi.ContentProviderResource](docs/ContentProviderResource.md)
 - [TessJsonApi.ContentProviderResourceAllOf](docs/ContentProviderResourceAllOf.md)
 - [TessJsonApi.ContentProviderResourceAllOfRelationships](docs/ContentProviderResourceAllOfRelationships.md)
 - [TessJsonApi.Event](docs/Event.md)
 - [TessJsonApi.EventAllOf](docs/EventAllOf.md)
 - [TessJsonApi.EventAttributes](docs/EventAttributes.md)
 - [TessJsonApi.EventAttributesReport](docs/EventAttributesReport.md)
 - [TessJsonApi.EventCollection](docs/EventCollection.md)
 - [TessJsonApi.EventCollectionAllOf](docs/EventCollectionAllOf.md)
 - [TessJsonApi.EventResource](docs/EventResource.md)
 - [TessJsonApi.EventResourceAllOf](docs/EventResourceAllOf.md)
 - [TessJsonApi.EventResourceAllOfRelationships](docs/EventResourceAllOfRelationships.md)
 - [TessJsonApi.ExternalResource](docs/ExternalResource.md)
 - [TessJsonApi.Facet](docs/Facet.md)
 - [TessJsonApi.FacetedCollection](docs/FacetedCollection.md)
 - [TessJsonApi.FacetedCollectionAllOf](docs/FacetedCollectionAllOf.md)
 - [TessJsonApi.FacetedCollectionAllOfMeta](docs/FacetedCollectionAllOfMeta.md)
 - [TessJsonApi.JsonApiResponse](docs/JsonApiResponse.md)
 - [TessJsonApi.Links](docs/Links.md)
 - [TessJsonApi.Material](docs/Material.md)
 - [TessJsonApi.MaterialAllOf](docs/MaterialAllOf.md)
 - [TessJsonApi.MaterialAttributes](docs/MaterialAttributes.md)
 - [TessJsonApi.MaterialCollection](docs/MaterialCollection.md)
 - [TessJsonApi.MaterialCollectionAllOf](docs/MaterialCollectionAllOf.md)
 - [TessJsonApi.MaterialResource](docs/MaterialResource.md)
 - [TessJsonApi.MaterialResourceAllOf](docs/MaterialResourceAllOf.md)
 - [TessJsonApi.MaterialResourceAllOfRelationships](docs/MaterialResourceAllOfRelationships.md)
 - [TessJsonApi.MultiRelationshipObject](docs/MultiRelationshipObject.md)
 - [TessJsonApi.Node](docs/Node.md)
 - [TessJsonApi.NodeAllOf](docs/NodeAllOf.md)
 - [TessJsonApi.NodeAttributes](docs/NodeAttributes.md)
 - [TessJsonApi.NodeAttributesStaffInner](docs/NodeAttributesStaffInner.md)
 - [TessJsonApi.NodeCollection](docs/NodeCollection.md)
 - [TessJsonApi.NodeCollectionAllOf](docs/NodeCollectionAllOf.md)
 - [TessJsonApi.NodeResource](docs/NodeResource.md)
 - [TessJsonApi.NodeResourceAllOf](docs/NodeResourceAllOf.md)
 - [TessJsonApi.NodeResourceAllOfRelationships](docs/NodeResourceAllOfRelationships.md)
 - [TessJsonApi.OntologyTerm](docs/OntologyTerm.md)
 - [TessJsonApi.OptionalRelationshipObject](docs/OptionalRelationshipObject.md)
 - [TessJsonApi.OptionalResourceIdentifierObject](docs/OptionalResourceIdentifierObject.md)
 - [TessJsonApi.PaginationLinks](docs/PaginationLinks.md)
 - [TessJsonApi.ResourceIdentifierObject](docs/ResourceIdentifierObject.md)
 - [TessJsonApi.ResourceObject](docs/ResourceObject.md)
 - [TessJsonApi.ResourceObjectAllOf](docs/ResourceObjectAllOf.md)
 - [TessJsonApi.SingleRelationshipObject](docs/SingleRelationshipObject.md)
 - [TessJsonApi.User](docs/User.md)
 - [TessJsonApi.UserAllOf](docs/UserAllOf.md)
 - [TessJsonApi.UserAttributes](docs/UserAttributes.md)
 - [TessJsonApi.UserCollection](docs/UserCollection.md)
 - [TessJsonApi.UserCollectionAllOf](docs/UserCollectionAllOf.md)
 - [TessJsonApi.UserResource](docs/UserResource.md)
 - [TessJsonApi.UserResourceAllOf](docs/UserResourceAllOf.md)
 - [TessJsonApi.Workflow](docs/Workflow.md)
 - [TessJsonApi.WorkflowAllOf](docs/WorkflowAllOf.md)
 - [TessJsonApi.WorkflowAttributes](docs/WorkflowAttributes.md)
 - [TessJsonApi.WorkflowCollection](docs/WorkflowCollection.md)
 - [TessJsonApi.WorkflowCollectionAllOf](docs/WorkflowCollectionAllOf.md)
 - [TessJsonApi.WorkflowResource](docs/WorkflowResource.md)
 - [TessJsonApi.WorkflowResourceAllOf](docs/WorkflowResourceAllOf.md)
 - [TessJsonApi.WorkflowResourceAllOfRelationships](docs/WorkflowResourceAllOfRelationships.md)


## Documentation for Authorization

All endpoints do not require authorization.
