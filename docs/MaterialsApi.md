# TessJsonApi.MaterialsApi

All URIs are relative to *https://tess.oerc.ox.ac.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**materialsGet**](MaterialsApi.md#materialsGet) | **GET** /materials | 
[**materialsSlugGet**](MaterialsApi.md#materialsSlugGet) | **GET** /materials/{slug} | 


<a name="materialsGet"></a>
# **materialsGet**
> MaterialCollection materialsGet(opts)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.MaterialsApi();

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

var apiInstance = new TessJsonApi.MaterialsApi();

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

