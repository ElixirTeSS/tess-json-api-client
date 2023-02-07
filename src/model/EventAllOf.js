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
import EventResource from './EventResource';

/**
 * The EventAllOf model module.
 * @module model/EventAllOf
 * @version 0.2.0
 */
class EventAllOf {
    /**
     * Constructs a new <code>EventAllOf</code>.
     * @alias module:model/EventAllOf
     */
    constructor() { 
        
        EventAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventAllOf} obj Optional instance to populate.
     * @return {module:model/EventAllOf} The populated <code>EventAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = EventResource.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventAllOf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          EventResource.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/EventResource} data
 */
EventAllOf.prototype['data'] = undefined;






export default EventAllOf;
