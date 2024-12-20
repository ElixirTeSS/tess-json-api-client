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
import MultiRelationshipObject from './MultiRelationshipObject';

/**
 * The ContentProviderResourceAllOfRelationships model module.
 * @module model/ContentProviderResourceAllOfRelationships
 * @version 1.4.0
 */
class ContentProviderResourceAllOfRelationships {
    /**
     * Constructs a new <code>ContentProviderResourceAllOfRelationships</code>.
     * @alias module:model/ContentProviderResourceAllOfRelationships
     */
    constructor() { 
        
        ContentProviderResourceAllOfRelationships.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentProviderResourceAllOfRelationships</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentProviderResourceAllOfRelationships} obj Optional instance to populate.
     * @return {module:model/ContentProviderResourceAllOfRelationships} The populated <code>ContentProviderResourceAllOfRelationships</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentProviderResourceAllOfRelationships();

            if (data.hasOwnProperty('events')) {
                obj['events'] = MultiRelationshipObject.constructFromObject(data['events']);
            }
            if (data.hasOwnProperty('materials')) {
                obj['materials'] = MultiRelationshipObject.constructFromObject(data['materials']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentProviderResourceAllOfRelationships</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentProviderResourceAllOfRelationships</code>.
     */
    static validateJSON(data) {
        // validate the optional field `events`
        if (data['events']) { // data not null
          MultiRelationshipObject.validateJSON(data['events']);
        }
        // validate the optional field `materials`
        if (data['materials']) { // data not null
          MultiRelationshipObject.validateJSON(data['materials']);
        }

        return true;
    }


}



/**
 * @member {module:model/MultiRelationshipObject} events
 */
ContentProviderResourceAllOfRelationships.prototype['events'] = undefined;

/**
 * @member {module:model/MultiRelationshipObject} materials
 */
ContentProviderResourceAllOfRelationships.prototype['materials'] = undefined;






export default ContentProviderResourceAllOfRelationships;

