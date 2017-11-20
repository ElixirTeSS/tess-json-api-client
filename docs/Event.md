# TessJsonApi.Event

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The title of the event | [optional] 
**subtitle** | **String** | The subtitle of the event | [optional] 
**url** | **String** | The URL where the actual event can be found. | [optional] 
**organizer** | **String** | The organization responsible for creating the event. | [optional] 
**description** | **String** | A succinct description of what the event is about. | [optional] 
**start** | **Date** | The date and time the event starts on | [optional] 
**end** | **Date** | The date and time the event ends on. | [optional] 
**sponsor** | **String** | The person or organization that is sponsoring the event. | [optional] 
**venue** | **String** | The name of the building the event will be hosted in | [optional] 
**city** | **String** | The city the event will be hosted in | [optional] 
**country** | **String** | The regional county the event will be hosted in | [optional] 
**county** | **String** | The name of country the event will be hosted in | [optional] 
**postcode** | **String** | The postcode of the venue hosting the event | [optional] 
**latitude** | **String** | The latitude co-ordinate of the event. | [optional] 
**longitude** | **String** | The longitude co-ordinate of the event. | [optional] 
**createdAt** | **Date** | The date the event was first created on TeSS | [optional] 
**updatedAt** | **Date** | The date the event was last updated on TeSS | [optional] 
**keywords** | **[String]** | A series of freetext words used to describe an event. | [optional] 
**eventTypes** | **[String]** | The category of the event. This could be a meeting or a course; or if unknown or neither, an event | [optional] 
**targetAudience** | **[String]** | The intended audience of the event. This can includes things like scientific discpline and expertise level | [optional] 
**capacity** | **[String]** | The number of people allowed to attend the event | [optional] 
**eligibility** | **[String]** | Various criteria require to participate in the event | [optional] 
**contact** | **String** | The name and/or contact details of a person or institution organizing the event | [optional] 
**hostInstitutions** | **[String]** | The institution physically hosting the event | [optional] 
**scientificTopics** | [**[ScientificTopic]**](ScientificTopic.md) | The classification of the event based on the EDAM ontologies scientific topics. | [optional] 


