/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import OntologyTerm from './OntologyTerm';

/**
 * The WorkflowAttributes model module.
 * @module model/WorkflowAttributes
 * @version 1.3.0
 */
class WorkflowAttributes {
    /**
     * Constructs a new <code>WorkflowAttributes</code>.
     * @alias module:model/WorkflowAttributes
     */
    constructor() { 
        
        WorkflowAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowAttributes} obj Optional instance to populate.
     * @return {module:model/WorkflowAttributes} The populated <code>WorkflowAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowAttributes();

            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('workflow-content')) {
                obj['workflow-content'] = ApiClient.convertToType(data['workflow-content'], {'String': Object});
            }
            if (data.hasOwnProperty('doi')) {
                obj['doi'] = ApiClient.convertToType(data['doi'], 'String');
            }
            if (data.hasOwnProperty('created-at')) {
                obj['created-at'] = ApiClient.convertToType(data['created-at'], 'Date');
            }
            if (data.hasOwnProperty('updated-at')) {
                obj['updated-at'] = ApiClient.convertToType(data['updated-at'], 'Date');
            }
            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
            }
            if (data.hasOwnProperty('licence')) {
                obj['licence'] = ApiClient.convertToType(data['licence'], 'String');
            }
            if (data.hasOwnProperty('difficulty-level')) {
                obj['difficulty-level'] = ApiClient.convertToType(data['difficulty-level'], 'String');
            }
            if (data.hasOwnProperty('authors')) {
                obj['authors'] = ApiClient.convertToType(data['authors'], ['String']);
            }
            if (data.hasOwnProperty('contributors')) {
                obj['contributors'] = ApiClient.convertToType(data['contributors'], ['String']);
            }
            if (data.hasOwnProperty('target-audience')) {
                obj['target-audience'] = ApiClient.convertToType(data['target-audience'], ['String']);
            }
            if (data.hasOwnProperty('scientific-topics')) {
                obj['scientific-topics'] = ApiClient.convertToType(data['scientific-topics'], [OntologyTerm]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowAttributes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['doi'] && !(typeof data['doi'] === 'string' || data['doi'] instanceof String)) {
            throw new Error("Expected the field `doi` to be a primitive type in the JSON string but got " + data['doi']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['keywords'])) {
            throw new Error("Expected the field `keywords` to be an array in the JSON data but got " + data['keywords']);
        }
        // ensure the json data is a string
        if (data['licence'] && !(typeof data['licence'] === 'string' || data['licence'] instanceof String)) {
            throw new Error("Expected the field `licence` to be a primitive type in the JSON string but got " + data['licence']);
        }
        // ensure the json data is a string
        if (data['difficulty-level'] && !(typeof data['difficulty-level'] === 'string' || data['difficulty-level'] instanceof String)) {
            throw new Error("Expected the field `difficulty-level` to be a primitive type in the JSON string but got " + data['difficulty-level']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['authors'])) {
            throw new Error("Expected the field `authors` to be an array in the JSON data but got " + data['authors']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['contributors'])) {
            throw new Error("Expected the field `contributors` to be an array in the JSON data but got " + data['contributors']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['target-audience'])) {
            throw new Error("Expected the field `target-audience` to be an array in the JSON data but got " + data['target-audience']);
        }
        if (data['scientific-topics']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['scientific-topics'])) {
                throw new Error("Expected the field `scientific-topics` to be an array in the JSON data but got " + data['scientific-topics']);
            }
            // validate the optional field `scientific-topics` (array)
            for (const item of data['scientific-topics']) {
                OntologyTerm.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * The \"friendly\" identifier of the workflow.
 * @member {String} slug
 */
WorkflowAttributes.prototype['slug'] = undefined;

/**
 * The title of the workflow.
 * @member {String} title
 */
WorkflowAttributes.prototype['title'] = undefined;

/**
 * A succinct description of what the workflow is about.
 * @member {String} description
 */
WorkflowAttributes.prototype['description'] = undefined;

/**
 * The cytoscape.js JSON structure describing the workflow.
 * @member {Object.<String, Object>} workflow-content
 */
WorkflowAttributes.prototype['workflow-content'] = undefined;

/**
 * The DOI of the workflow.
 * @member {String} doi
 */
WorkflowAttributes.prototype['doi'] = undefined;

/**
 * The date the workflow was first created on TeSS.
 * @member {Date} created-at
 */
WorkflowAttributes.prototype['created-at'] = undefined;

/**
 * The date the workflow was last updated on TeSS.
 * @member {Date} updated-at
 */
WorkflowAttributes.prototype['updated-at'] = undefined;

/**
 * A list of freetext keywords to describe the workflow.
 * @member {Array.<String>} keywords
 */
WorkflowAttributes.prototype['keywords'] = undefined;

/**
 * The licence chosed to determine how the workflow may be re-used.
 * @member {String} licence
 */
WorkflowAttributes.prototype['licence'] = undefined;

/**
 * The difficulty level comprehension of the workflow requires. Can be Beginner, Intermediate, Advanced, or Not specified.
 * @member {String} difficulty-level
 */
WorkflowAttributes.prototype['difficulty-level'] = undefined;

/**
 * A list of people who wrote or helped write the workflow.
 * @member {Array.<String>} authors
 */
WorkflowAttributes.prototype['authors'] = undefined;

/**
 * Any person who was not the author but contributed in some way. Maybe they produced some software used, reviewed the paper, or helped inspire the author.
 * @member {Array.<String>} contributors
 */
WorkflowAttributes.prototype['contributors'] = undefined;

/**
 * The audience the workflow was intended for.
 * @member {Array.<String>} target-audience
 */
WorkflowAttributes.prototype['target-audience'] = undefined;

/**
 * The classification of the workflow based on the EDAM ontology's scientific topics.
 * @member {Array.<module:model/OntologyTerm>} scientific-topics
 */
WorkflowAttributes.prototype['scientific-topics'] = undefined;






export default WorkflowAttributes;

