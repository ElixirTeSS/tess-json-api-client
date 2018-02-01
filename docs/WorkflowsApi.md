# TessJsonApi.WorkflowsApi

All URIs are relative to *https://tess.elixir-europe.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowsGet**](WorkflowsApi.md#workflowsGet) | **GET** /workflows | 
[**workflowsSlugGet**](WorkflowsApi.md#workflowsSlugGet) | **GET** /workflows/{slug} | 


<a name="workflowsGet"></a>
# **workflowsGet**
> WorkflowCollection workflowsGet(opts)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.WorkflowsApi();

var opts = { 
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example", // String | Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'authors': ["authors_example"], // [String] | Filter by author.
  'contributors': ["contributors_example"], // [String] | Filter by contributor.
  'difficultyLevel': ["difficultyLevel_example"], // [String] | Filter by difficulty level.
  'keywords': ["keywords_example"], // [String] | Filter by keywords.
  'licence': ["licence_example"], // [String] | Filter by licence. See http://licenses.opendefinition.org/licenses/groups/all.json
  'scientificTopics': ["scientificTopics_example"], // [String] | Filter by scientific topics.
  'targetAudience': ["targetAudience_example"] // [String] | Filter by who the intended target audience is.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsGet(opts, callback);
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

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="workflowsSlugGet"></a>
# **workflowsSlugGet**
> Workflow workflowsSlugGet(slug)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.WorkflowsApi();

var slug = "slug_example"; // String | The _slug_ id of an workflow e.g. ember


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.workflowsSlugGet(slug, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| The _slug_ id of an workflow e.g. ember | 

### Return type

[**Workflow**](Workflow.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

