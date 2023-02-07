# TessJsonApi.WorkflowsApi

All URIs are relative to *https://tess.elixir-europe.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowsGet**](WorkflowsApi.md#workflowsGet) | **GET** /workflows | 
[**workflowsSlugGet**](WorkflowsApi.md#workflowsSlugGet) | **GET** /workflows/{slug} | 



## workflowsGet

> WorkflowCollection workflowsGet(opts)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.WorkflowsApi();
let opts = {
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example", // String | Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'authors': ["null"], // [String] | Filter by author.
  'contributors': ["null"], // [String] | Filter by contributor.
  'difficultyLevel': ["null"], // [String] | Filter by difficulty level.
  'keywords': ["null"], // [String] | Filter by keywords.
  'licence': ["null"], // [String] | Filter by licence. See http://licenses.opendefinition.org/licenses/groups/all.json
  'scientificTopics': ["null"], // [String] | Filter by scientific topics.
  'targetAudience': ["null"] // [String] | Filter by who the intended target audience is.
};
apiInstance.workflowsGet(opts, (error, data, response) => {
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
 **contributors** | [**[String]**](String.md)| Filter by contributor. | [optional] 
 **difficultyLevel** | [**[String]**](String.md)| Filter by difficulty level. | [optional] 
 **keywords** | [**[String]**](String.md)| Filter by keywords. | [optional] 
 **licence** | [**[String]**](String.md)| Filter by licence. See http://licenses.opendefinition.org/licenses/groups/all.json | [optional] 
 **scientificTopics** | [**[String]**](String.md)| Filter by scientific topics. | [optional] 
 **targetAudience** | [**[String]**](String.md)| Filter by who the intended target audience is. | [optional] 

### Return type

[**WorkflowCollection**](WorkflowCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## workflowsSlugGet

> Workflow workflowsSlugGet(slug)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.WorkflowsApi();
let slug = "slug_example"; // String | The _slug_ id of a workflow e.g. ember
apiInstance.workflowsSlugGet(slug, (error, data, response) => {
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
 **slug** | **String**| The _slug_ id of a workflow e.g. ember | 

### Return type

[**Workflow**](Workflow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

