# TessJsonApi.ContentProvidersApi

All URIs are relative to *https://tess.oerc.ox.ac.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentProvidersGet**](ContentProvidersApi.md#contentProvidersGet) | **GET** /content_providers | 
[**contentProvidersSlugGet**](ContentProvidersApi.md#contentProvidersSlugGet) | **GET** /content_providers/{slug} | 


<a name="contentProvidersGet"></a>
# **contentProvidersGet**
> ContentProviderCollection contentProvidersGet(opts)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.ContentProvidersApi();

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

var apiInstance = new TessJsonApi.ContentProvidersApi();

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

