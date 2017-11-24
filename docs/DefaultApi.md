# TessJsonApi.DefaultApi

All URIs are relative to *https://tess.oerc.ox.ac.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentProvidersGet**](DefaultApi.md#contentProvidersGet) | **GET** /content_providers | 
[**contentProvidersSlugGet**](DefaultApi.md#contentProvidersSlugGet) | **GET** /content_providers/{slug} | 
[**eventsGet**](DefaultApi.md#eventsGet) | **GET** /events | 
[**eventsSlugGet**](DefaultApi.md#eventsSlugGet) | **GET** /events/{slug} | 
[**materialsGet**](DefaultApi.md#materialsGet) | **GET** /materials | 
[**materialsSlugGet**](DefaultApi.md#materialsSlugGet) | **GET** /materials/{slug} | 
[**usersGet**](DefaultApi.md#usersGet) | **GET** /users | 
[**usersSlugGet**](DefaultApi.md#usersSlugGet) | **GET** /users/{slug} | 
[**workflowsGet**](DefaultApi.md#workflowsGet) | **GET** /workflows | 
[**workflowsSlugGet**](DefaultApi.md#workflowsSlugGet) | **GET** /workflows/{slug} | 


<a name="contentProvidersGet"></a>
# **contentProvidersGet**
> ContentProviderCollection contentProvidersGet(opts)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.DefaultApi();

var opts = { 
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example" // String | Field to sort by.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentProvidersGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Search keywords. | [optional] 
 **pageNumber** | **Number**| The page of the collection to view. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return per page. | [optional] [default to 30]
 **sort** | **String**| Field to sort by. | [optional] 

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
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.DefaultApi();

var slug = "slug_example"; // String | The _slug_ id of an content provider e.g. goblet


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contentProvidersSlugGet(slug, callback);
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

<a name="eventsGet"></a>
# **eventsGet**
> EventCollection eventsGet(opts)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.DefaultApi();

var opts = { 
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example" // String | Field to sort by.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Search keywords. | [optional] 
 **pageNumber** | **Number**| The page of the collection to view. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return per page. | [optional] [default to 30]
 **sort** | **String**| Field to sort by. | [optional] 

### Return type

[**EventCollection**](EventCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="eventsSlugGet"></a>
# **eventsSlugGet**
> Event eventsSlugGet(slug)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.DefaultApi();

var slug = "slug_example"; // String | The _slug_ id of an event e.g. python-training-2017


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.eventsSlugGet(slug, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| The _slug_ id of an event e.g. python-training-2017 | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="materialsGet"></a>
# **materialsGet**
> MaterialCollection materialsGet(opts)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.DefaultApi();

var opts = { 
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example" // String | Field to sort by.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.materialsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Search keywords. | [optional] 
 **pageNumber** | **Number**| The page of the collection to view. | [optional] [default to 1]
 **pageSize** | **Number**| The number of results to return per page. | [optional] [default to 30]
 **sort** | **String**| Field to sort by. | [optional] 

### Return type

[**MaterialCollection**](MaterialCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="materialsSlugGet"></a>
# **materialsSlugGet**
> Material materialsSlugGet(slug)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.DefaultApi();

var slug = "slug_example"; // String | The _slug_ id of an material e.g. python-tutorial


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.materialsSlugGet(slug, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| The _slug_ id of an material e.g. python-tutorial | 

### Return type

[**Material**](Material.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="usersGet"></a>
# **usersGet**
> UserCollection usersGet()



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserCollection**](UserCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="usersSlugGet"></a>
# **usersSlugGet**
> User usersSlugGet(slug)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.DefaultApi();

var slug = "slug_example"; // String | The _slug_ id of an user e.g. niall.beard


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersSlugGet(slug, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**| The _slug_ id of an user e.g. niall.beard | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

<a name="workflowsGet"></a>
# **workflowsGet**
> WorkflowCollection workflowsGet(opts)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.DefaultApi();

var opts = { 
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example" // String | Field to sort by.
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
 **sort** | **String**| Field to sort by. | [optional] 

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

var apiInstance = new TessJsonApi.DefaultApi();

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

