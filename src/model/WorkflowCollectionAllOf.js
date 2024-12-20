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
import WorkflowResource from './WorkflowResource';

/**
 * The WorkflowCollectionAllOf model module.
 * @module model/WorkflowCollectionAllOf
 * @version 1.4.0
 */
class WorkflowCollectionAllOf {
    /**
     * Constructs a new <code>WorkflowCollectionAllOf</code>.
     * @alias module:model/WorkflowCollectionAllOf
     */
    constructor() { 
        
        WorkflowCollectionAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowCollectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowCollectionAllOf} obj Optional instance to populate.
     * @return {module:model/WorkflowCollectionAllOf} The populated <code>WorkflowCollectionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowCollectionAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [WorkflowResource]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowCollectionAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowCollectionAllOf</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                WorkflowResource.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/WorkflowResource>} data
 */
WorkflowCollectionAllOf.prototype['data'] = undefined;






export default WorkflowCollectionAllOf;

