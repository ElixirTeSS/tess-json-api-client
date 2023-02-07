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
import JsonApiResponse from './JsonApiResponse';
import MaterialAllOf from './MaterialAllOf';
import MaterialResource from './MaterialResource';

/**
 * The Material model module.
 * @module model/Material
 * @version 0.2.0
 */
class Material {
    /**
     * Constructs a new <code>Material</code>.
     * @alias module:model/Material
     * @implements module:model/JsonApiResponse
     * @implements module:model/MaterialAllOf
     */
    constructor() { 
        JsonApiResponse.initialize(this);MaterialAllOf.initialize(this);
        Material.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Material</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Material} obj Optional instance to populate.
     * @return {module:model/Material} The populated <code>Material</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Material();
            JsonApiResponse.constructFromObject(data, obj);
            MaterialAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], Object);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ApiClient.convertToType(data['meta'], Object);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], Object);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], Object);
            }
            if (data.hasOwnProperty('jsonapi')) {
                obj['jsonapi'] = ApiClient.convertToType(data['jsonapi'], Object);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = MaterialResource.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Material</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Material</code>.
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
 * @member {Object} errors
 */
Material.prototype['errors'] = undefined;

/**
 * @member {Object} meta
 */
Material.prototype['meta'] = undefined;

/**
 * @member {Object} links
 */
Material.prototype['links'] = undefined;

/**
 * @member {Object} included
 */
Material.prototype['included'] = undefined;

/**
 * @member {Object} jsonapi
 */
Material.prototype['jsonapi'] = undefined;

/**
 * @member {module:model/MaterialResource} data
 */
Material.prototype['data'] = undefined;


// Implement JsonApiResponse interface:
/**
 * @member {Object} errors
 */
JsonApiResponse.prototype['errors'] = undefined;
/**
 * @member {Object} meta
 */
JsonApiResponse.prototype['meta'] = undefined;
/**
 * @member {Object} links
 */
JsonApiResponse.prototype['links'] = undefined;
/**
 * @member {Object} included
 */
JsonApiResponse.prototype['included'] = undefined;
/**
 * @member {Object} jsonapi
 */
JsonApiResponse.prototype['jsonapi'] = undefined;
// Implement MaterialAllOf interface:
/**
 * @member {module:model/MaterialResource} data
 */
MaterialAllOf.prototype['data'] = undefined;




export default Material;

