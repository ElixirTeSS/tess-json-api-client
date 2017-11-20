# tess_json_api

TessJsonApi - JavaScript client for tess_json_api
Testing the JSON-API API for TeSS. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install tess_json_api --save
```

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
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TessJsonApi = require('tess_json_api');

var api = new TessJsonApi.DefaultApi()

var slug = "slug_example"; // {String} The _slug_ id of an event e.g. python-training-2017


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.eventSlugGet(slug, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://tess.oerc.ox.ac.uk*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TessJsonApi.DefaultApi* | [**eventSlugGet**](docs/DefaultApi.md#eventSlugGet) | **GET** /event/{slug} | 
*TessJsonApi.DefaultApi* | [**eventsGet**](docs/DefaultApi.md#eventsGet) | **GET** /events | 


## Documentation for Models

 - [TessJsonApi.ApiResource](docs/ApiResource.md)
 - [TessJsonApi.Event](docs/Event.md)
 - [TessJsonApi.EventAttributes](docs/EventAttributes.md)
 - [TessJsonApi.EventCollection](docs/EventCollection.md)
 - [TessJsonApi.EventResource](docs/EventResource.md)
 - [TessJsonApi.EventResourceRelationships](docs/EventResourceRelationships.md)
 - [TessJsonApi.Facet](docs/Facet.md)
 - [TessJsonApi.FacetedCollection](docs/FacetedCollection.md)
 - [TessJsonApi.FacetedCollectionMeta](docs/FacetedCollectionMeta.md)
 - [TessJsonApi.Links](docs/Links.md)
 - [TessJsonApi.PaginationLinks](docs/PaginationLinks.md)
 - [TessJsonApi.ScientificTopic](docs/ScientificTopic.md)


## Documentation for Authorization

 All endpoints do not require authorization.

