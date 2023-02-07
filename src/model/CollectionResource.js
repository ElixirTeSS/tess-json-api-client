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
import CollectionResourceAllOf from './CollectionResourceAllOf';
import ContentProviderResourceAllOfRelationships from './ContentProviderResourceAllOfRelationships';
import Links from './Links';
import ResourceObject from './ResourceObject';

/**
 * The CollectionResource model module.
 * @module model/CollectionResource
 * @version 0.2.0
 */
class CollectionResource {
    /**
     * Constructs a new <code>CollectionResource</code>.
     * @alias module:model/CollectionResource
     * @implements module:model/ResourceObject
     * @implements module:model/CollectionResourceAllOf
     */
    constructor() { 
        ResourceObject.initialize(this);CollectionResourceAllOf.initialize(this);
        CollectionResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CollectionResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionResource} obj Optional instance to populate.
     * @return {module:model/CollectionResource} The populated <code>CollectionResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectionResource();
            ResourceObject.constructFromObject(data, obj);
            CollectionResourceAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
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
     * Validates the JSON data with respect to <code>CollectionResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CollectionResource</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
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
 * @member {String} id
 */
CollectionResource.prototype['id'] = undefined;

/**
 * @member {String} type
 */
CollectionResource.prototype['type'] = undefined;

/**
 * @member {module:model/CollectionAttributes} attributes
 */
CollectionResource.prototype['attributes'] = undefined;

/**
 * @member {module:model/ContentProviderResourceAllOfRelationships} relationships
 */
CollectionResource.prototype['relationships'] = undefined;

/**
 * @member {module:model/Links} links
 */
CollectionResource.prototype['links'] = undefined;


// Implement ResourceObject interface:
/**
 * @member {String} id
 */
ResourceObject.prototype['id'] = undefined;
/**
 * @member {String} type
 */
ResourceObject.prototype['type'] = undefined;
/**
 * @member {Object} attributes
 */
ResourceObject.prototype['attributes'] = undefined;
/**
 * @member {Object} relationships
 */
ResourceObject.prototype['relationships'] = undefined;
/**
 * @member {module:model/Links} links
 */
ResourceObject.prototype['links'] = undefined;
// Implement CollectionResourceAllOf interface:
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




export default CollectionResource;

