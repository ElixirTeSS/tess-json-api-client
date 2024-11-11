# TessJsonApi.EventsApi

All URIs are relative to *https://tess.elixir-europe.org*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsGet**](EventsApi.md#eventsGet) | **GET** /events | 
[**eventsSlugGet**](EventsApi.md#eventsSlugGet) | **GET** /events/{slug} | 



## eventsGet

> EventCollection eventsGet(opts)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.EventsApi();
let opts = {
  'q': "q_example", // String | Search keywords.
  'pageNumber': 1, // Number | The page of the collection to view.
  'pageSize': 30, // Number | The number of results to return per page.
  'sort': "sort_example", // String | Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
  'contentProvider': ["null"], // [String] | Filter by content provider name.
  'keywords': ["null"], // [String] | Filter by keywords.
  'node': ["null"], // [String] | Filter by ELIXIR node name.
  'scientificTopics': ["null"], // [String] | Filter by scientific topics.
  'operations': ["null"], // [String] | Filter by operations.
  'targetAudience': ["null"], // [String] | Filter by who the intended target audience is.
  'tools': ["null"], // [String] | Filter by what tools are involved.
  'eventTypes': ["null"], // [String] | Filter by event type.
  'city': ["null"], // [String] | Filter by city.
  'country': ["null"], // [String] | Filter by country.
  'venue': ["null"], // [String] | Filter by venue.
  'organizer': ["null"], // [String] | Filter by organizer.
  'online': true, // Boolean | Only show events with online access?
  'sponsors': ["null"], // [String] | Filter by sponsor.
  'includeExpired': true, // Boolean | Include events that have finished.
  'includeDisabled': true, // Boolean | Include events that are disabled.
  'eligibility': ["null"], // [String] | Filter by who is eligible to attend the event.
  'language': ["null"], // [String] | Filter by events that will use the given language.
  'collections': ["null"], // [String] | Filter events in a given collection (name).
  'start': "start_example" // String | Filter for events that occur in the given date range. Either a single YYYY-MM-DD date, or a range separated by a / e.g. 2002-05-03/2012-05-03.
};
apiInstance.eventsGet(opts, (error, data, response) => {
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
 **contentProvider** | [**[String]**](String.md)| Filter by content provider name. | [optional] 
 **keywords** | [**[String]**](String.md)| Filter by keywords. | [optional] 
 **node** | [**[String]**](String.md)| Filter by ELIXIR node name. | [optional] 
 **scientificTopics** | [**[String]**](String.md)| Filter by scientific topics. | [optional] 
 **operations** | [**[String]**](String.md)| Filter by operations. | [optional] 
 **targetAudience** | [**[String]**](String.md)| Filter by who the intended target audience is. | [optional] 
 **tools** | [**[String]**](String.md)| Filter by what tools are involved. | [optional] 
 **eventTypes** | [**[String]**](String.md)| Filter by event type. | [optional] 
 **city** | [**[String]**](String.md)| Filter by city. | [optional] 
 **country** | [**[String]**](String.md)| Filter by country. | [optional] 
 **venue** | [**[String]**](String.md)| Filter by venue. | [optional] 
 **organizer** | [**[String]**](String.md)| Filter by organizer. | [optional] 
 **online** | **Boolean**| Only show events with online access? | [optional] 
 **sponsors** | [**[String]**](String.md)| Filter by sponsor. | [optional] 
 **includeExpired** | **Boolean**| Include events that have finished. | [optional] 
 **includeDisabled** | **Boolean**| Include events that are disabled. | [optional] 
 **eligibility** | [**[String]**](String.md)| Filter by who is eligible to attend the event. | [optional] 
 **language** | [**[String]**](String.md)| Filter by events that will use the given language. | [optional] 
 **collections** | [**[String]**](String.md)| Filter events in a given collection (name). | [optional] 
 **start** | **String**| Filter for events that occur in the given date range. Either a single YYYY-MM-DD date, or a range separated by a / e.g. 2002-05-03/2012-05-03. | [optional] 

### Return type

[**EventCollection**](EventCollection.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## eventsSlugGet

> Event eventsSlugGet(slug)



### Example

```javascript
import TessJsonApi from 'tess_json_api';

let apiInstance = new TessJsonApi.EventsApi();
let slug = "slug_example"; // String | The _slug_ id of an event e.g. python-training-2017
apiInstance.eventsSlugGet(slug, (error, data, response) => {
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
 **slug** | **String**| The _slug_ id of an event e.g. python-training-2017 | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

