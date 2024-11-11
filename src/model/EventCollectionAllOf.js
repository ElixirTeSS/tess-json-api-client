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
import EventResource from './EventResource';

/**
 * The EventCollectionAllOf model module.
 * @module model/EventCollectionAllOf
 * @version 1.4.0
 */
class EventCollectionAllOf {
    /**
     * Constructs a new <code>EventCollectionAllOf</code>.
     * @alias module:model/EventCollectionAllOf
     */
    constructor() { 
        
        EventCollectionAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventCollectionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventCollectionAllOf} obj Optional instance to populate.
     * @return {module:model/EventCollectionAllOf} The populated <code>EventCollectionAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventCollectionAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [EventResource]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventCollectionAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventCollectionAllOf</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                EventResource.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/EventResource>} data
 */
EventCollectionAllOf.prototype['data'] = undefined;






export default EventCollectionAllOf;

