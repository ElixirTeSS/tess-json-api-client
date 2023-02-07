# TessJsonApi.NodesApi

All URIs are relative to *https://tess.elixir-europe.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nodesGet**](NodesApi.md#nodesGet) | **GET** /nodes | 
[**nodesSlugGet**](NodesApi.md#nodesSlugGet) | **GET** /nodes/{slug} | 



## nodesGet

> NodeCollection nodesGet(opts)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.NodesApi();
let opts = {
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the node collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example", // String | Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'keywords': ["null"] // [String] | Filter by keywords.
};
apiInstance.nodesGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Search keywords. | [optional] 
 **pageNumber** | **Number**| The page of the node collection to view. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return per page. | [optional] [default to 30]
 **sort** | **String**| Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only).  | [optional] 
 **keywords** | [**[String]**](String.md)| Filter by keywords. | [optional] 

### Return type

[**NodeCollection**](NodeCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## nodesSlugGet

> Node nodesSlugGet(slug)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.NodesApi();
let slug = "slug_example"; // String | The _slug_ id of a node e.g. belgium
apiInstance.nodesSlugGet(slug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| The _slug_ id of a node e.g. belgium | 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

