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
import CollectionAllOf from './CollectionAllOf';
import CollectionResource from './CollectionResource';
import JsonApiResponse from './JsonApiResponse';

/**
 * The Collection model module.
 * @module model/Collection
 * @version 1.4.0
 */
class Collection {
    /**
     * Constructs a new <code>Collection</code>.
     * @alias module:model/Collection
     * @implements module:model/JsonApiResponse
     * @implements module:model/CollectionAllOf
     */
    constructor() { 
        JsonApiResponse.initialize(this);CollectionAllOf.initialize(this);
        Collection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Collection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collection} obj Optional instance to populate.
     * @return {module:model/Collection} The populated <code>Collection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Collection();
            JsonApiResponse.constructFromObject(data, obj);
            CollectionAllOf.constructFromObject(data, obj);

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
                obj['data'] = CollectionResource.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Collection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Collection</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          CollectionResource.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {Object} errors
 */
Collection.prototype['errors'] = undefined;

/**
 * @member {Object} meta
 */
Collection.prototype['meta'] = undefined;

/**
 * @member {Object} links
 */
Collection.prototype['links'] = undefined;

/**
 * @member {Object} included
 */
Collection.prototype['included'] = undefined;

/**
 * @member {Object} jsonapi
 */
Collection.prototype['jsonapi'] = undefined;

/**
 * @member {module:model/CollectionResource} data
 */
Collection.prototype['data'] = undefined;


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
// Implement CollectionAllOf interface:
/**
 * @member {module:model/CollectionResource} data
 */
CollectionAllOf.prototype['data'] = undefined;




export default Collection;

