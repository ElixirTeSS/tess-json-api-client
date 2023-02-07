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
import MultiRelationshipObject from './MultiRelationshipObject';
import OptionalRelationshipObject from './OptionalRelationshipObject';
import SingleRelationshipObject from './SingleRelationshipObject';

/**
 * The EventResourceAllOfRelationships model module.
 * @module model/EventResourceAllOfRelationships
 * @version 0.2.0
 */
class EventResourceAllOfRelationships {
    /**
     * Constructs a new <code>EventResourceAllOfRelationships</code>.
     * @alias module:model/EventResourceAllOfRelationships
     */
    constructor() { 
        
        EventResourceAllOfRelationships.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventResourceAllOfRelationships</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventResourceAllOfRelationships} obj Optional instance to populate.
     * @return {module:model/EventResourceAllOfRelationships} The populated <code>EventResourceAllOfRelationships</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventResourceAllOfRelationships();

            if (data.hasOwnProperty('user')) {
                obj['user'] = SingleRelationshipObject.constructFromObject(data['user']);
            }
            if (data.hasOwnProperty('content-provider')) {
                obj['content-provider'] = OptionalRelationshipObject.constructFromObject(data['content-provider']);
            }
            if (data.hasOwnProperty('nodes')) {
                obj['nodes'] = MultiRelationshipObject.constructFromObject(data['nodes']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventResourceAllOfRelationships</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventResourceAllOfRelationships</code>.
     */
    static validateJSON(data) {
        // validate the optional field `user`
        if (data['user']) { // data not null
          SingleRelationshipObject.validateJSON(data['user']);
        }
        // validate the optional field `content-provider`
        if (data['content-provider']) { // data not null
          OptionalRelationshipObject.validateJSON(data['content-provider']);
        }
        // validate the optional field `nodes`
        if (data['nodes']) { // data not null
          MultiRelationshipObject.validateJSON(data['nodes']);
        }

        return true;
    }


}



/**
 * @member {module:model/SingleRelationshipObject} user
 */
EventResourceAllOfRelationships.prototype['user'] = undefined;

/**
 * @member {module:model/OptionalRelationshipObject} content-provider
 */
EventResourceAllOfRelationships.prototype['content-provider'] = undefined;

/**
 * @member {module:model/MultiRelationshipObject} nodes
 */
EventResourceAllOfRelationships.prototype['nodes'] = undefined;






export default EventResourceAllOfRelationships;

