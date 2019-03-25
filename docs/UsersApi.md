# TessJsonApi.UsersApi

All URIs are relative to *https://tess.elixir-europe.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | 
[**usersSlugGet**](UsersApi.md#usersSlugGet) | **GET** /users/{slug} | 


<a name="usersGet"></a>
# **usersGet**
> UserCollection usersGet()



### Example
```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.UsersApi();

apiInstance.usersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.UsersApi();

let slug = "slug_example"; // String | The _slug_ id of an user e.g. niall.beard


apiInstance.usersSlugGet(slug, (error, data, response) => {
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
 **slug** | **String**| The _slug_ id of an user e.g. niall.beard | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

