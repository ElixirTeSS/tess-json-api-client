# TessJsonApi.WorkflowAttributes

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **String** | The \&quot;friendly\&quot; identifier of the workflow. | [optional] 
**title** | **String** | The title of the workflow. | [optional] 
**description** | **String** | A succinct description of what the workflow is about. | [optional] 
**workflowContent** | **Object** | The cytoscape.js JSON structure describing the workflow. | [optional] 
**doi** | **String** | The DOI of the workflow. | [optional] 
**createdAt** | **Date** | The date the workflow was first created on TeSS. | [optional] 
**updatedAt** | **Date** | The date the workflow was last updated on TeSS. | [optional] 
**keywords** | **[String]** | A list of freetext keywords to describe the workflow. | [optional] 
**licence** | **String** | The licence chosed to determine how the workflow may be re-used. | [optional] 
**difficultyLevel** | **String** | The difficulty level comprehension of the workflow requires. Can be Beginner, Intermediate, Advanced, or Not specified. | [optional] 
**authors** | **[String]** | A list of people who wrote or helped write the workflow. | [optional] 
**contributors** | **[String]** | Any person who was not the author but contributed in some way. Maybe they produced some software used, reviewed the paper, or helped inspire the author. | [optional] 
**targetAudience** | **[String]** | The audience the workflow was intended for. | [optional] 
**scientificTopics** | [**[OntologyTerm]**](OntologyTerm.md) | The classification of the workflow based on the EDAM ontology&#39;s scientific topics. | [optional] 


