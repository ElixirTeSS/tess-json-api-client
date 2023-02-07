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
import SingleRelationshipObject from './SingleRelationshipObject';

/**
 * The WorkflowResourceAllOfRelationships model module.
 * @module model/WorkflowResourceAllOfRelationships
 * @version 1.3.0
 */
class WorkflowResourceAllOfRelationships {
    /**
     * Constructs a new <code>WorkflowResourceAllOfRelationships</code>.
     * @alias module:model/WorkflowResourceAllOfRelationships
     */
    constructor() { 
        
        WorkflowResourceAllOfRelationships.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowResourceAllOfRelationships</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowResourceAllOfRelationships} obj Optional instance to populate.
     * @return {module:model/WorkflowResourceAllOfRelationships} The populated <code>WorkflowResourceAllOfRelationships</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowResourceAllOfRelationships();

            if (data.hasOwnProperty('user')) {
                obj['user'] = SingleRelationshipObject.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowResourceAllOfRelationships</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowResourceAllOfRelationships</code>.
     */
    static validateJSON(data) {
        // validate the optional field `user`
        if (data['user']) { // data not null
          SingleRelationshipObject.validateJSON(data['user']);
        }

        return true;
    }


}



/**
 * @member {module:model/SingleRelationshipObject} user
 */
WorkflowResourceAllOfRelationships.prototype['user'] = undefined;






export default WorkflowResourceAllOfRelationships;

