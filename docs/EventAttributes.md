# TessJsonApi.EventAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **String** | The \&quot;friendly\&quot; identifier of the event. | [optional] 
**title** | **String** | The title of the event. | 
**subtitle** | **String** | The subtitle of the event. | [optional] 
**url** | **String** | The URL where the actual event can be found. | 
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
**scientificTopics** | [**[OntologyTerm]**](OntologyTerm.md) | The classification of the event based on the EDAM ontology&#39;s topics branch. | [optional] 
**operations** | [**[OntologyTerm]**](OntologyTerm.md) | The classification of the event based on the EDAM ontology&#39;s operations branch. | [optional] 
**externalResources** | [**[ExternalResource]**](ExternalResource.md) | A list of external resources associated with this tool. These are largely tools from bio.tools, and standards, databases, and policies from biosharing.org - but can be anything. | [optional] 
**report** | [**EventAttributesReport**](EventAttributesReport.md) |  | [optional] 
**fields** | **[String]** | ARDC Fields of Research codes that describe the event. | [optional] 
**duration** | **String** | How long the event lasts. | [optional] 
**timezone** | **String** | The timezone in which the event takes place. e.g. Europe/Brussels | [optional] 
**sponsors** | **[String]** | Who sponsored, or funded the event. | [optional] 
**online** | **Boolean** | Does the event take place online? | [optional] 
**presence** | **String** | Is the event onsite (face-to-face), online or hybrid? | [optional] 
**costBasis** | **String** | Whether costs are incurred by the event, and who needs to pay | [optional] 
**costValue** | **String** | The cost of attending the event. | [optional] 
**costCurrency** | **String** | The currency of the event&#39;s cost. | [optional] 
**recognition** | **String** | A description of any qualifications, awards, certificates, diplomas, or other educational credentials that will be awarded on successful completion of the training event. | [optional] 
**learningObjectives** | **String** | A description of what knowledge, skills, or abilities are gained from attending the event. | [optional] 
**prerequisites** | **String** | A description of what knowledge attendees should have before attending the event. | [optional] 
**techRequirements** | **String** | What technical requirements (e.g. software, hardware) are needed for participants of the event. | [optional] 
**externalId** | **String** | If the event is from an external source, this is the unique identifier of the event in that source. | [optional] 
**lastScraped** | **Date** | The date that the event was last harvested by TeSS. | [optional] 
**scraperRecord** | **Boolean** | Was this event automatically harvested (as opposed to being submitted manually)? | [optional] 



## Enum: PresenceEnum


* `onsite` (value: `"onsite"`)

* `online` (value: `"online"`)

* `hybrid` (value: `"hybrid"`)




