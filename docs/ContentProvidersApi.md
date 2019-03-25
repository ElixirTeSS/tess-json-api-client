# TessJsonApi.ContentProvidersApi

All URIs are relative to *https://tess.elixir-europe.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentProvidersGet**](ContentProvidersApi.md#contentProvidersGet) | **GET** /content_providers | 
[**contentProvidersSlugGet**](ContentProvidersApi.md#contentProvidersSlugGet) | **GET** /content_providers/{slug} | 


<a name="contentProvidersGet"></a>
# **contentProvidersGet**
> ContentProviderCollection contentProvidersGet(opts)



### Example
```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.ContentProvidersApi();

let opts = { 
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example", // String | Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'keywords': ["keywords_example"], // [String] | Filter by keywords.
  'node': ["node_example"], // [String] | Filter by ELIXIR node name.
  'contentProviderType': ["contentProviderType_example"] // [String] | Filter by content provider type.
};

apiInstance.contentProvidersGet(opts, (error, data, response) => {
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
 **pageNumber** | **Number**| The page of the collection to view. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return per page. | [optional] [default to 30]
 **sort** | **String**| Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only).  | [optional] 
 **keywords** | [**[String]**](String.md)| Filter by keywords. | [optional] 
 **node** | [**[String]**](String.md)| Filter by ELIXIR node name. | [optional] 
 **contentProviderType** | [**[String]**](String.md)| Filter by content provider type. | [optional] 

### Return type

[**ContentProviderCollection**](ContentProviderCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="contentProvidersSlugGet"></a>
# **contentProvidersSlugGet**
> ContentProvider contentProvidersSlugGet(slug)



### Example
```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.ContentProvidersApi();

let slug = "slug_example"; // String | The _slug_ id of an content provider e.g. goblet


apiInstance.contentProvidersSlugGet(slug, (error, data, response) => {
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
 **slug** | **String**| The _slug_ id of an content provider e.g. goblet | 

### Return type

[**ContentProvider**](ContentProvider.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

