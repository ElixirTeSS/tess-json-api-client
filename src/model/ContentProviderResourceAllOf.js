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
import ContentProviderAttributes from './ContentProviderAttributes';
import ContentProviderResourceAllOfRelationships from './ContentProviderResourceAllOfRelationships';
import Links from './Links';

/**
 * The ContentProviderResourceAllOf model module.
 * @module model/ContentProviderResourceAllOf
 * @version 0.2.0
 */
class ContentProviderResourceAllOf {
    /**
     * Constructs a new <code>ContentProviderResourceAllOf</code>.
     * @alias module:model/ContentProviderResourceAllOf
     */
    constructor() { 
        
        ContentProviderResourceAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentProviderResourceAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentProviderResourceAllOf} obj Optional instance to populate.
     * @return {module:model/ContentProviderResourceAllOf} The populated <code>ContentProviderResourceAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentProviderResourceAllOf();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ContentProviderAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = ContentProviderResourceAllOfRelationships.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = Links.constructFromObject(data['links']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContentProviderResourceAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentProviderResourceAllOf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `attributes`
        if (data['attributes']) { // data not null
          ContentProviderAttributes.validateJSON(data['attributes']);
        }
        // validate the optional field `relationships`
        if (data['relationships']) { // data not null
          ContentProviderResourceAllOfRelationships.validateJSON(data['relationships']);
        }
        // validate the optional field `links`
        if (data['links']) { // data not null
          Links.validateJSON(data['links']);
        }

        return true;
    }


}



/**
 * @member {module:model/ContentProviderAttributes} attributes
 */
ContentProviderResourceAllOf.prototype['attributes'] = undefined;

/**
 * @member {module:model/ContentProviderResourceAllOfRelationships} relationships
 */
ContentProviderResourceAllOf.prototype['relationships'] = undefined;

/**
 * @member {module:model/Links} links
 */
ContentProviderResourceAllOf.prototype['links'] = undefined;






export default ContentProviderResourceAllOf;

