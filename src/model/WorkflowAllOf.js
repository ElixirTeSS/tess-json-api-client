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
 * The WorkflowAllOf model module.
 * @module model/WorkflowAllOf
 * @version 1.4.0
 */
class WorkflowAllOf {
    /**
     * Constructs a new <code>WorkflowAllOf</code>.
     * @alias module:model/WorkflowAllOf
     */
    constructor() { 
        
        WorkflowAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowAllOf} obj Optional instance to populate.
     * @return {module:model/WorkflowAllOf} The populated <code>WorkflowAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = WorkflowResource.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowAllOf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          WorkflowResource.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/WorkflowResource} data
 */
WorkflowAllOf.prototype['data'] = undefined;






export default WorkflowAllOf;

