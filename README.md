# tess_json_api

TessJsonApi - JavaScript client for tess_json_api
An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.2.0
- Package version: 0.2.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install tess_json_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your tess_json_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('tess_json_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/tess_json_api
then install it via:

```shell
    npm install YOUR_USERNAME/tess_json_api --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

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

var api = new TessJsonApi.ContentProvidersApi()

var opts = { 
  'q': "q_example", // {String} Search keywords.
  'pageNumber': 1, // {Number} The page of the collection to view.
  'pageSize': 30, // {Number} The number of results to return per page.
  'sort': "sort_example", // {String} Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'keywords': ["keywords_example"], // {[String]} Filter by keywords.
  'node': ["node_example"], // {[String]} Filter by ELIXIR node name.
  'contentProviderType': ["contentProviderType_example"] // {[String]} Filter by content provider type.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.contentProvidersGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://tess.elixir-europe.org*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TessJsonApi.ContentProvidersApi* | [**contentProvidersGet**](docs/ContentProvidersApi.md#contentProvidersGet) | **GET** /content_providers | 
*TessJsonApi.ContentProvidersApi* | [**contentProvidersSlugGet**](docs/ContentProvidersApi.md#contentProvidersSlugGet) | **GET** /content_providers/{slug} | 
*TessJsonApi.EventsApi* | [**eventsGet**](docs/EventsApi.md#eventsGet) | **GET** /events | 
*TessJsonApi.EventsApi* | [**eventsSlugGet**](docs/EventsApi.md#eventsSlugGet) | **GET** /events/{slug} | 
*TessJsonApi.MaterialsApi* | [**materialsGet**](docs/MaterialsApi.md#materialsGet) | **GET** /materials | 
*TessJsonApi.MaterialsApi* | [**materialsSlugGet**](docs/MaterialsApi.md#materialsSlugGet) | **GET** /materials/{slug} | 
*TessJsonApi.UsersApi* | [**usersGet**](docs/UsersApi.md#usersGet) | **GET** /users | 
*TessJsonApi.UsersApi* | [**usersSlugGet**](docs/UsersApi.md#usersSlugGet) | **GET** /users/{slug} | 
*TessJsonApi.WorkflowsApi* | [**workflowsGet**](docs/WorkflowsApi.md#workflowsGet) | **GET** /workflows | 
*TessJsonApi.WorkflowsApi* | [**workflowsSlugGet**](docs/WorkflowsApi.md#workflowsSlugGet) | **GET** /workflows/{slug} | 


## Documentation for Models

 - [TessJsonApi.ContentProvider](docs/ContentProvider.md)
 - [TessJsonApi.ContentProviderAttributes](docs/ContentProviderAttributes.md)
 - [TessJsonApi.ContentProviderCollection](docs/ContentProviderCollection.md)
 - [TessJsonApi.ContentProviderResource](docs/ContentProviderResource.md)
 - [TessJsonApi.ContentProviderResourceRelationships](docs/ContentProviderResourceRelationships.md)
 - [TessJsonApi.Event](docs/Event.md)
 - [TessJsonApi.EventAttributes](docs/EventAttributes.md)
 - [TessJsonApi.EventAttributesReport](docs/EventAttributesReport.md)
 - [TessJsonApi.EventCollection](docs/EventCollection.md)
 - [TessJsonApi.EventResource](docs/EventResource.md)
 - [TessJsonApi.EventResourceRelationships](docs/EventResourceRelationships.md)
 - [TessJsonApi.ExternalResource](docs/ExternalResource.md)
 - [TessJsonApi.Facet](docs/Facet.md)
 - [TessJsonApi.FacetedCollection](docs/FacetedCollection.md)
 - [TessJsonApi.FacetedCollectionMeta](docs/FacetedCollectionMeta.md)
 - [TessJsonApi.JsonApiResponse](docs/JsonApiResponse.md)
 - [TessJsonApi.Links](docs/Links.md)
 - [TessJsonApi.Material](docs/Material.md)
 - [TessJsonApi.MaterialAttributes](docs/MaterialAttributes.md)
 - [TessJsonApi.MaterialCollection](docs/MaterialCollection.md)
 - [TessJsonApi.MaterialResource](docs/MaterialResource.md)
 - [TessJsonApi.MultiRelationshipObject](docs/MultiRelationshipObject.md)
 - [TessJsonApi.OntologyTerm](docs/OntologyTerm.md)
 - [TessJsonApi.PaginationLinks](docs/PaginationLinks.md)
 - [TessJsonApi.ResourceIdentifierObject](docs/ResourceIdentifierObject.md)
 - [TessJsonApi.ResourceObject](docs/ResourceObject.md)
 - [TessJsonApi.SingleRelationshipObject](docs/SingleRelationshipObject.md)
 - [TessJsonApi.User](docs/User.md)
 - [TessJsonApi.UserAttributes](docs/UserAttributes.md)
 - [TessJsonApi.UserCollection](docs/UserCollection.md)
 - [TessJsonApi.UserResource](docs/UserResource.md)
 - [TessJsonApi.Workflow](docs/Workflow.md)
 - [TessJsonApi.WorkflowAttributes](docs/WorkflowAttributes.md)
 - [TessJsonApi.WorkflowCollection](docs/WorkflowCollection.md)
 - [TessJsonApi.WorkflowResource](docs/WorkflowResource.md)
 - [TessJsonApi.WorkflowResourceRelationships](docs/WorkflowResourceRelationships.md)


## Documentation for Authorization

 All endpoints do not require authorization.

