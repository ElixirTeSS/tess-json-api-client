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
import OptionalResourceIdentifierObject from './OptionalResourceIdentifierObject';

/**
 * The OptionalRelationshipObject model module.
 * @module model/OptionalRelationshipObject
 * @version 1.3.0
 */
class OptionalRelationshipObject {
    /**
     * Constructs a new <code>OptionalRelationshipObject</code>.
     * @alias module:model/OptionalRelationshipObject
     */
    constructor() { 
        
        OptionalRelationshipObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OptionalRelationshipObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OptionalRelationshipObject} obj Optional instance to populate.
     * @return {module:model/OptionalRelationshipObject} The populated <code>OptionalRelationshipObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OptionalRelationshipObject();

            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], Object);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = OptionalResourceIdentifierObject.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OptionalRelationshipObject</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OptionalRelationshipObject</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          OptionalResourceIdentifierObject.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {Object} links
 */
OptionalRelationshipObject.prototype['links'] = undefined;

/**
 * @member {module:model/OptionalResourceIdentifierObject} data
 */
OptionalRelationshipObject.prototype['data'] = undefined;

/**
 * @member {Object} meta
 */
OptionalRelationshipObject.prototype['meta'] = undefined;






export default OptionalRelationshipObject;

