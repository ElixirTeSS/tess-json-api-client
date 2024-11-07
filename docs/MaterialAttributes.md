# TessJsonApi.MaterialAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **String** | The \&quot;friendly\&quot; identifier of the material. | [optional] 
**title** | **String** | The title of the material. | [optional] 
**url** | **String** | The URL where the actual material can be found. | [optional] 
**description** | **String** | A description of what the training material is about. | [optional] 
**doi** | **String** | The DOI of the material (if it has one). | [optional] 
**remoteUpdatedDate** | **Date** | The date the material was last updated on its original site. | [optional] 
**remoteCreatedDate** | **Date** | The date the material was first created on its original site. | [optional] 
**createdAt** | **Date** | The date the material was first created on TeSS. | [optional] 
**updatedAt** | **Date** | The date the material was last updated on TeSS. | [optional] 
**keywords** | **[String]** | A list of freetext keywords to describe the material. | [optional] 
**licence** | **String** | The licence chosen to determine how the material may be re-used. | [optional] 
**difficultyLevel** | **String** | The difficulty level comprehension of the material requires. Can be Beginner, Intermediate, Advanced, or Not specified. | [optional] 
**authors** | **[String]** | A list of people who wrote or helped write the material. | [optional] 
**contributors** | **[String]** | Any person who was not the author but contributed in some way. Maybe they produced some software used, reviewed the paper, or helped inspire the author. | [optional] 
**targetAudience** | **[String]** | The audience the material was intended for. | [optional] 
**scientificTopics** | [**[OntologyTerm]**](OntologyTerm.md) | The classification of the material based on the EDAM ontology&#39;s topics branch. | [optional] 
**operations** | [**[OntologyTerm]**](OntologyTerm.md) | The classification of the material based on the EDAM ontology&#39;s operations branch. | [optional] 
**externalResources** | [**[ExternalResource]**](ExternalResource.md) | A list of external resources associated with this tool. These are largely tools from bio.tools, and standards, databases, and policies from biosharing.org - but can be anything. | [optional] 
**resourceType** | **[String]** | The type(s) of this training material, e.g. Video, Poster. | [optional] 
**fields** | **[String]** | ARDC Fields of Research codes that describe the material. | [optional] 
**version** | **String** | The current version identifier of the training material. | [optional] 
**contact** | **String** | The name and/or contact details of a person or institution responsible for this training material. | [optional] 
**prerequisites** | **String** | A description of what knowledge attendees should have before accessing this training material. | [optional] 
**syllabus** | **String** | The syllabus of this training, or an overview of the topics covered by the training material. | [optional] 
**learningObjectives** | **String** | A description of what knowledge, skills, or abilities are gained from this training material. | [optional] 
**subsets** | **[String]** | Identifier URLs or DOIs for each subset of the training material. | [optional] 
**dateCreated** | **Date** | The date that the training material was created. | [optional] 
**dateModified** | **Date** | The date that the training material was last updated. | [optional] 
**datePublished** | **Date** | The date that the training material was published. | [optional] 
**status** | **String** | The status, or maturity, of the material. | [optional] 
**otherTypes** | **String** |  | [optional] 
**lastScraped** | **Date** | The date that the training material was last harvested by TeSS. | [optional] 
**scraperRecord** | **Boolean** | Was this material automatically harvested (as opposed to being submitted manually)? | [optional] 


