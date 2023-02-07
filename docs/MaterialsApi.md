# TessJsonApi.MaterialsApi

All URIs are relative to *https://tess.elixir-europe.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**materialsGet**](MaterialsApi.md#materialsGet) | **GET** /materials | 
[**materialsSlugGet**](MaterialsApi.md#materialsSlugGet) | **GET** /materials/{slug} | 



## materialsGet

> MaterialCollection materialsGet(opts)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.MaterialsApi();
let opts = {
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example", // String | Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'authors': ["null"], // [String] | Filter by author.
  'contentProvider': ["null"], // [String] | Filter by content provider name.
  'contributors': ["null"], // [String] | Filter by contributor.
  'difficultyLevel': ["null"], // [String] | Filter by difficulty level.
  'keywords': ["null"], // [String] | Filter by keywords.
  'licence': ["null"], // [String] | Filter by licence. See http://licenses.opendefinition.org/licenses/groups/all.json
  'node': ["null"], // [String] | Filter by ELIXIR node name.
  'scientificTopics': ["null"], // [String] | Filter by scientific topics.
  'operations': ["null"], // [String] | Filter by operations.
  'targetAudience': ["null"], // [String] | Filter by who the intended target audience is.
  'tools': ["null"], // [String] | Filter by what tools are involved.
  'resourceType': ["null"] // [String] | Filter by resource type, e.g. \"Lecture\" etc.
};
apiInstance.materialsGet(opts, (error, data, response) => {
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
 **authors** | [**[String]**](String.md)| Filter by author. | [optional] 
 **contentProvider** | [**[String]**](String.md)| Filter by content provider name. | [optional] 
 **contributors** | [**[String]**](String.md)| Filter by contributor. | [optional] 
 **difficultyLevel** | [**[String]**](String.md)| Filter by difficulty level. | [optional] 
 **keywords** | [**[String]**](String.md)| Filter by keywords. | [optional] 
 **licence** | [**[String]**](String.md)| Filter by licence. See http://licenses.opendefinition.org/licenses/groups/all.json | [optional] 
 **node** | [**[String]**](String.md)| Filter by ELIXIR node name. | [optional] 
 **scientificTopics** | [**[String]**](String.md)| Filter by scientific topics. | [optional] 
 **operations** | [**[String]**](String.md)| Filter by operations. | [optional] 
 **targetAudience** | [**[String]**](String.md)| Filter by who the intended target audience is. | [optional] 
 **tools** | [**[String]**](String.md)| Filter by what tools are involved. | [optional] 
 **resourceType** | [**[String]**](String.md)| Filter by resource type, e.g. \&quot;Lecture\&quot; etc. | [optional] 

### Return type

[**MaterialCollection**](MaterialCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## materialsSlugGet

> Material materialsSlugGet(slug)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.MaterialsApi();
let slug = "slug_example"; // String | The _slug_ id of a material e.g. python-tutorial
apiInstance.materialsSlugGet(slug, (error, data, response) => {
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
 **slug** | **String**| The _slug_ id of a material e.g. python-tutorial | 

### Return type

[**Material**](Material.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

