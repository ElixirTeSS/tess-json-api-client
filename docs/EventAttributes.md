# TessJsonApi.EventAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **String** | The \&quot;friendly\&quot; identifier of the event. | [optional] 
**title** | **String** | The title of the event. | [optional] 
**subtitle** | **String** | The subtitle of the event. | [optional] 
**url** | **String** | The URL where the actual event can be found. | [optional] 
**organizer** | **String** | The organization responsible for creating the event. | [optional] 
**description** | **String** | A succinct description of what the event is about. | [optional] 
**start** | **Date** | The date and time at which the event starts. | [optional] 
**end** | **Date** | The date and time at which the event ends. | [optional] 
**sponsor** | **String** | The person or organization that is sponsoring the event. | [optional] 
**venue** | **String** | The name of the building where the event will be hosted. | [optional] 
**city** | **String** | The city the where event will be hosted. | [optional] 
**country** | **String** | The regional where county the event will be hosted. | [optional] 
**county** | **String** | The name of country where the event will be hosted. | [optional] 
**postcode** | **String** | The postcode of the venue hosting the event. | [optional] 
**latitude** | **String** | The latitude co-ordinate of the event. | [optional] 
**longitude** | **String** | The longitude co-ordinate of the event. | [optional] 
**createdAt** | **Date** | The date the event was first created on TeSS. | [optional] 
**updatedAt** | **Date** | The date the event was last updated on TeSS. | [optional] 
**keywords** | **[String]** | A series of freetext words used to describe an event. | [optional] 
**eventTypes** | **[String]** | The category of the event. This could be a meeting or a course; or if unknown or neither, an event. | [optional] 
**targetAudience** | **[String]** | The intended audience of the event. This can includes things like scientific discpline and expertise level. | [optional] 
**capacity** | **Number** | The number of people allowed to attend the event. | [optional] 
**eligibility** | **[String]** | Various criteria require to participate in the event. | [optional] 
**contact** | **String** | The name and/or contact details of a person or institution organizing the event. | [optional] 
**hostInstitutions** | **[String]** | The institution physically hosting the event. | [optional] 
**scientificTopics** | [**[ScientificTopic]**](ScientificTopic.md) | The classification of the event based on the EDAM ontologies scientific topics. | [optional] 
**externalResources** | [**[ExternalResource]**](ExternalResource.md) | A list of external resources associated with this tool. These are largely tools from bio.tools, and standards, databases, and policies from biosharing.org - but can be anything. | [optional] 


