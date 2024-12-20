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
import MaterialResource from './MaterialResource';

/**
 * The MaterialAllOf model module.
 * @module model/MaterialAllOf
 * @version 1.4.0
 */
class MaterialAllOf {
    /**
     * Constructs a new <code>MaterialAllOf</code>.
     * @alias module:model/MaterialAllOf
     */
    constructor() { 
        
        MaterialAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MaterialAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaterialAllOf} obj Optional instance to populate.
     * @return {module:model/MaterialAllOf} The populated <code>MaterialAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaterialAllOf();

            if (data.hasOwnProperty('data')) {
                obj['data'] = MaterialResource.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MaterialAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MaterialAllOf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          MaterialResource.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {module:model/MaterialResource} data
 */
MaterialAllOf.prototype['data'] = undefined;






export default MaterialAllOf;

