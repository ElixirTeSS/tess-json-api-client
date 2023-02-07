# TessJsonApi.CollectionsApi

All URIs are relative to *https://tess.elixir-europe.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**collectionsGet**](CollectionsApi.md#collectionsGet) | **GET** /collections | 
[**collectionsSlugGet**](CollectionsApi.md#collectionsSlugGet) | **GET** /collections/{slug} | 



## collectionsGet

> CollectionCollection collectionsGet(opts)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.CollectionsApi();
let opts = {
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection index to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example", // String | Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'keywords': ["null"] // [String] | Filter by keywords.
};
apiInstance.collectionsGet(opts, (error, data, response) => {
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
 **pageNumber** | **Number**| The page of the collection index to view. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return per page. | [optional] [default to 30]
 **sort** | **String**| Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only).  | [optional] 
 **keywords** | [**[String]**](String.md)| Filter by keywords. | [optional] 

### Return type

[**CollectionCollection**](CollectionCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## collectionsSlugGet

> Collection collectionsSlugGet(slug)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.CollectionsApi();
let slug = "slug_example"; // String | The _slug_ id of a collection e.g. some-collection
apiInstance.collectionsSlugGet(slug, (error, data, response) => {
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
 **slug** | **String**| The _slug_ id of a collection e.g. some-collection | 

### Return type

[**Collection**](Collection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

