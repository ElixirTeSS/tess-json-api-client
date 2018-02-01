# TessJsonApi.EventsApi

All URIs are relative to *https://tess.elixir-europe.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsGet**](EventsApi.md#eventsGet) | **GET** /events | 
[**eventsSlugGet**](EventsApi.md#eventsSlugGet) | **GET** /events/{slug} | 


<a name="eventsGet"></a>
# **eventsGet**
> EventCollection eventsGet(opts)



### Example
```javascript
var TessJsonApi = require('tess_json_api');

var apiInstance = new TessJsonApi.EventsApi();

var opts = { 
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example", // String | Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'contentProvider': ["contentProvider_example"], // [String] | Filter by content provider name.
  'keywords': ["keywords_example"], // [String] | Filter by keywords.
  'node': ["node_example"], // [String] | Filter by ELIXIR node name.
  'scientificTopics': ["scientificTopics_example"], // [String] | Filter by scientific topics.
  'targetAudience': ["targetAudience_example"], // [String] | Filter by who the intended target audience is.
  'tools': ["tools_example"], // [String] | Filter by what tools are involved.
  'eventTypes': ["eventTypes_example"], // [String] | Filter by event type.
  'city': ["city_example"], // [String] | Filter by city.
  'country': ["country_example"], // [String] | Filter by country.
  'venue': ["venue_example"], // [String] | Filter by venue
  'organizer': ["organizer_example"], // [String] | Filter by organizer.
  'online': true, // Boolean | Only show online events?
  'sponsor': ["sponsor_example"], // [String] | Filter by sponsor.
  'includeExpired': true // Boolean | Include events that have finished.
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
 **sort** | **String**| Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only).  | [optional] 
 **contentProvider** | [**[String]**](String.md)| Filter by content provider name. | [optional] 
 **keywords** | [**[String]**](String.md)| Filter by keywords. | [optional] 
 **node** | [**[String]**](String.md)| Filter by ELIXIR node name. | [optional] 
 **scientificTopics** | [**[String]**](String.md)| Filter by scientific topics. | [optional] 
 **targetAudience** | [**[String]**](String.md)| Filter by who the intended target audience is. | [optional] 
 **tools** | [**[String]**](String.md)| Filter by what tools are involved. | [optional] 
 **eventTypes** | [**[String]**](String.md)| Filter by event type. | [optional] 
 **city** | [**[String]**](String.md)| Filter by city. | [optional] 
 **country** | [**[String]**](String.md)| Filter by country. | [optional] 
 **venue** | [**[String]**](String.md)| Filter by venue | [optional] 
 **organizer** | [**[String]**](String.md)| Filter by organizer. | [optional] 
 **online** | **Boolean**| Only show online events? | [optional] 
 **sponsor** | [**[String]**](String.md)| Filter by sponsor. | [optional] 
 **includeExpired** | **Boolean**| Include events that have finished. | [optional] 

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

var apiInstance = new TessJsonApi.EventsApi();

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

