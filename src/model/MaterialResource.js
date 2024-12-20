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
import Links from './Links';
import MaterialAttributes from './MaterialAttributes';
import MaterialResourceAllOfRelationships from './MaterialResourceAllOfRelationships';
import ResourceObject from './ResourceObject';

/**
 * The MaterialResource model module.
 * @module model/MaterialResource
 * @version 1.4.0
 */
class MaterialResource {
    /**
     * Constructs a new <code>MaterialResource</code>.
     * @alias module:model/MaterialResource
     * @implements module:model/ResourceObject
     */
    constructor() { 
        ResourceObject.initialize(this);
        MaterialResource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MaterialResource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MaterialResource} obj Optional instance to populate.
     * @return {module:model/MaterialResource} The populated <code>MaterialResource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MaterialResource();
            ResourceObject.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = MaterialAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = MaterialResourceAllOfRelationships.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = Links.constructFromObject(data['links']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MaterialResource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MaterialResource</code>.
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
          MaterialAttributes.validateJSON(data['attributes']);
        }
        // validate the optional field `relationships`
        if (data['relationships']) { // data not null
          MaterialResourceAllOfRelationships.validateJSON(data['relationships']);
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
MaterialResource.prototype['id'] = undefined;

/**
 * @member {String} type
 */
MaterialResource.prototype['type'] = undefined;

/**
 * @member {module:model/MaterialAttributes} attributes
 */
MaterialResource.prototype['attributes'] = undefined;

/**
 * @member {module:model/MaterialResourceAllOfRelationships} relationships
 */
MaterialResource.prototype['relationships'] = undefined;

/**
 * @member {module:model/Links} links
 */
MaterialResource.prototype['links'] = undefined;


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




export default MaterialResource;

