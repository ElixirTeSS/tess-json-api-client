# TessJsonApi.DefaultApi

All URIs are relative to *https://tess.oerc.ox.ac.uk*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventSlugGet**](DefaultApi.md#eventSlugGet) | **GET** /event/{slug} | 
[**eventsGet**](DefaultApi.md#eventsGet) | **GET** /events | 


<a name="eventSlugGet"></a>
# **eventSlugGet**
> Event eventSlugGet(slug)



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
apiInstance.eventSlugGet(slug, callback);
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

<a name="eventsGet"></a>
# **eventsGet**
> EventCollection eventsGet()



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
apiInstance.eventsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EventCollection**](EventCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

