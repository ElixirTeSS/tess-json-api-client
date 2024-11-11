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
import ContentProviderAttributes from './ContentProviderAttributes';
import ContentProviderResourceAllOf from './ContentProviderResourceAllOf';
import ContentProviderResourceAllOfRelationships from './ContentProviderResourceAllOfRelationships';
import Links from './Links';
import ResourceObject from './ResourceObject';

/**
 * The ContentProviderResource model module.
 * @module model/ContentProviderResource
 * @version 1.4.0
 */
class ContentProviderResource {
    /**
     * Constructs a new <code>ContentProviderResource</code>.
     * @alias module:model/ContentProviderResource
     * @implements module:model/ResourceObject
     * @implements module:model/ContentProviderResourceAllOf
     */
    constructor() { 
        ResourceObject.initialize(this);ContentProviderResourceAllOf.initialize(this);
        ContentProviderResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentProviderResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentProviderResource} obj Optional instance to populate.
     * @return {module:model/ContentProviderResource} The populated <code>ContentProviderResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentProviderResource();
            ResourceObject.constructFromObject(data, obj);
            ContentProviderResourceAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
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
     * Validates the JSON data with respect to <code>ContentProviderResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentProviderResource</code>.
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
 * @member {String} id
 */
ContentProviderResource.prototype['id'] = undefined;

/**
 * @member {String} type
 */
ContentProviderResource.prototype['type'] = undefined;

/**
 * @member {module:model/ContentProviderAttributes} attributes
 */
ContentProviderResource.prototype['attributes'] = undefined;

/**
 * @member {module:model/ContentProviderResourceAllOfRelationships} relationships
 */
ContentProviderResource.prototype['relationships'] = undefined;

/**
 * @member {module:model/Links} links
 */
ContentProviderResource.prototype['links'] = undefined;


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
// Implement ContentProviderResourceAllOf interface:
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




export default ContentProviderResource;

