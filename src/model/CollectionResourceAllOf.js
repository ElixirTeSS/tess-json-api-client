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
import CollectionAttributes from './CollectionAttributes';
import ContentProviderResourceAllOfRelationships from './ContentProviderResourceAllOfRelationships';
import Links from './Links';

/**
 * The CollectionResourceAllOf model module.
 * @module model/CollectionResourceAllOf
 * @version 0.2.0
 */
class CollectionResourceAllOf {
    /**
     * Constructs a new <code>CollectionResourceAllOf</code>.
     * @alias module:model/CollectionResourceAllOf
     */
    constructor() { 
        
        CollectionResourceAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CollectionResourceAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionResourceAllOf} obj Optional instance to populate.
     * @return {module:model/CollectionResourceAllOf} The populated <code>CollectionResourceAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectionResourceAllOf();

            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = CollectionAttributes.constructFromObject(data['attributes']);
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
     * Validates the JSON data with respect to <code>CollectionResourceAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CollectionResourceAllOf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `attributes`
        if (data['attributes']) { // data not null
          CollectionAttributes.validateJSON(data['attributes']);
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
 * @member {module:model/CollectionAttributes} attributes
 */
CollectionResourceAllOf.prototype['attributes'] = undefined;

/**
 * @member {module:model/ContentProviderResourceAllOfRelationships} relationships
 */
CollectionResourceAllOf.prototype['relationships'] = undefined;

/**
 * @member {module:model/Links} links
 */
CollectionResourceAllOf.prototype['links'] = undefined;






export default CollectionResourceAllOf;
