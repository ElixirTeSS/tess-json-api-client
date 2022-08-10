# TessJsonApi.MaterialAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **String** | The \"friendly\" identifier of the material. | [optional] 
**title** | **String** | The title of the material. | [optional] 
**url** | **String** | The URL where the actual material can be found. | [optional] 
**description** | **String** | A description of what the training material is about. | [optional] 
**doi** | **String** | The DOI of the material (if it has one). | [optional] 
**remoteUpdatedDate** | **Date** | The date the material was last updated on its original site. | [optional] 
**remoteCreatedDate** | **Date** | The date the material was first created on its original site. | [optional] 
**createdAt** | **Date** | The date the material was first created on TeSS. | [optional] 
**updatedAt** | **Date** | The date the material was last updated on TeSS. | [optional] 
**keywords** | **[String]** | A list of freetext keywords to describe the material. | [optional] 
**licence** | **String** | The licence chosed to determine how the material may be re-used. | [optional] 
**difficultyLevel** | **String** | The difficulty level comprehension of the material requires. Can be Beginner, Intermediate, Advanced, or Not specified. | [optional] 
**authors** | **[String]** | A list of people who wrote or helped write the material. | [optional] 
**contributors** | **[String]** | Any person who was not the author but contributed in some way. Maybe they produced some software used, reviewed the paper, or helped inspire the author. | [optional] 
**targetAudience** | **[String]** | The audience the material was intended for. | [optional] 
**scientificTopics** | [**[OntologyTerm]**](OntologyTerm.md) | The classification of the material based on the EDAM ontology's scientific topics. | [optional] 
**operations** | [**[OntologyTerm]**](OntologyTerm.md) | The classification of the material based on the EDAM ontology's operations. | [optional] 
**externalResources** | [**[ExternalResource]**](ExternalResource.md) | A list of external resources associated with this tool. These are largely tools from bio.tools, and standards, databases, and policies from biosharing.org - but can be anything. | [optional] 


