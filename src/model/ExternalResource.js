/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ExternalResource model module.
 * @module model/ExternalResource
 * @version 0.2.0
 */
class ExternalResource {
    /**
     * Constructs a new <code>ExternalResource</code>.
     * @alias module:model/ExternalResource
     */
    constructor() { 
        
        ExternalResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExternalResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalResource} obj Optional instance to populate.
     * @return {module:model/ExternalResource} The populated <code>ExternalResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExternalResource();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('created-at')) {
                obj['created-at'] = ApiClient.convertToType(data['created-at'], 'Date');
            }
            if (data.hasOwnProperty('updated-at')) {
                obj['updated-at'] = ApiClient.convertToType(data['updated-at'], 'Date');
            }
            if (data.hasOwnProperty('api-url')) {
                obj['api-url'] = ApiClient.convertToType(data['api-url'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExternalResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalResource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['api-url'] && !(typeof data['api-url'] === 'string' || data['api-url'] instanceof String)) {
            throw new Error("Expected the field `api-url` to be a primitive type in the JSON string but got " + data['api-url']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * The title of the external resource
 * @member {String} title
 */
ExternalResource.prototype['title'] = undefined;

/**
 * A URL that resolves to a description of an external resource or the external resource itself.
 * @member {String} url
 */
ExternalResource.prototype['url'] = undefined;

/**
 * The date the association was created between this resource and the external resource within TeSS.
 * @member {Date} created-at
 */
ExternalResource.prototype['created-at'] = undefined;

/**
 * The date the association was last updated between this resource and the external resource within TeSS.
 * @member {Date} updated-at
 */
ExternalResource.prototype['updated-at'] = undefined;

/**
 * A URL that resolves to more information about the external resource represented in a common exchange format (e.g. JSON or XML)
 * @member {String} api-url
 */
ExternalResource.prototype['api-url'] = undefined;

/**
 * The type of external resource. This can be 'tool', 'database, policy or standard' for bio.tools and FAIRsharing respectively or any other resource type name for other external resources.
 * @member {String} type
 */
ExternalResource.prototype['type'] = undefined;






export default ExternalResource;

