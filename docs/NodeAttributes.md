# TessJsonApi.NodeAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **String** | The \&quot;friendly\&quot; identifier of the node. | [optional] 
**name** | **String** | The name of the node. | 
**memberStatus** | **String** | Whether the node is a member or observer of ELIXIR. | [optional] 
**countryCode** | **String** | The ISO 3166-1 alpha-2 code of the country this node represents. | [optional] 
**homePage** | **String** | A URL to the node&#39;s home page. | [optional] 
**staff** | [**[NodeAttributesStaffInner]**](NodeAttributesStaffInner.md) | A list of staff members belonging to this node. | [optional] 
**twitter** | **String** | The node&#39;s twitter handle. | [optional] 
**createdAt** | **Date** | The date the node was first created on TeSS. | [optional] 
**updatedAt** | **Date** | The date the node was last updated on TeSS. | [optional] 



## Enum: MemberStatusEnum


* `Member` (value: `"Member"`)

* `Observer` (value: `"Observer"`)




