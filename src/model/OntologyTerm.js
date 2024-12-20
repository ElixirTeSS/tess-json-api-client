/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The OntologyTerm model module.
 * @module model/OntologyTerm
 * @version 1.4.0
 */
class OntologyTerm {
    /**
     * Constructs a new <code>OntologyTerm</code>.
     * @alias module:model/OntologyTerm
     */
    constructor() { 
        
        OntologyTerm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OntologyTerm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OntologyTerm} obj Optional instance to populate.
     * @return {module:model/OntologyTerm} The populated <code>OntologyTerm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OntologyTerm();

            if (data.hasOwnProperty('preferred-label')) {
                obj['preferred-label'] = ApiClient.convertToType(data['preferred-label'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OntologyTerm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OntologyTerm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['preferred-label'] && !(typeof data['preferred-label'] === 'string' || data['preferred-label'] instanceof String)) {
            throw new Error("Expected the field `preferred-label` to be a primitive type in the JSON string but got " + data['preferred-label']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }

        return true;
    }


}



/**
 * @member {String} preferred-label
 */
OntologyTerm.prototype['preferred-label'] = undefined;

/**
 * @member {String} uri
 */
OntologyTerm.prototype['uri'] = undefined;






export default OntologyTerm;

