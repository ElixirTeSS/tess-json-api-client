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
import ContentProviderResource from './ContentProviderResource';

/**
 * The ContentProviderAllOf model module.
 * @module model/ContentProviderAllOf
 * @version 1.3.0
 */
class ContentProviderAllOf {
    /**
     * Constructs a new <code>ContentProviderAllOf</code>.
     * @alias module:model/ContentProviderAllOf
     */
    constructor() { 
        
        ContentProviderAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentProviderAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentProviderAllOf} obj Optional instance to populate.
     * @return {module:model/ContentProviderAllOf} The populated <code>ContentProviderAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentProviderAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ContentProviderResource.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentProviderAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentProviderAllOf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          ContentProviderResource.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/ContentProviderResource} data
 */
ContentProviderAllOf.prototype['data'] = undefined;






export default ContentProviderAllOf;

