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
import ResourceIdentifierObject from './ResourceIdentifierObject';

/**
 * The MultiRelationshipObject model module.
 * @module model/MultiRelationshipObject
 * @version 1.4.0
 */
class MultiRelationshipObject {
    /**
     * Constructs a new <code>MultiRelationshipObject</code>.
     * @alias module:model/MultiRelationshipObject
     */
    constructor() { 
        
        MultiRelationshipObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultiRelationshipObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultiRelationshipObject} obj Optional instance to populate.
     * @return {module:model/MultiRelationshipObject} The populated <code>MultiRelationshipObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiRelationshipObject();

            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], Object);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ResourceIdentifierObject]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultiRelationshipObject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultiRelationshipObject</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                ResourceIdentifierObject.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Object} links
 */
MultiRelationshipObject.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/ResourceIdentifierObject>} data
 */
MultiRelationshipObject.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
MultiRelationshipObject.prototype['meta'] = undefined;






export default MultiRelationshipObject;

