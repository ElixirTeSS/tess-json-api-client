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
import FacetedCollectionAllOf from './FacetedCollectionAllOf';
import FacetedCollectionAllOfMeta from './FacetedCollectionAllOfMeta';
import JsonApiResponse from './JsonApiResponse';
import Links from './Links';

/**
 * The FacetedCollection model module.
 * @module model/FacetedCollection
 * @version 1.3.0
 */
class FacetedCollection {
    /**
     * Constructs a new <code>FacetedCollection</code>.
     * @alias module:model/FacetedCollection
     * @implements module:model/JsonApiResponse
     * @implements module:model/FacetedCollectionAllOf
     */
    constructor() { 
        JsonApiResponse.initialize(this);FacetedCollectionAllOf.initialize(this);
        FacetedCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FacetedCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FacetedCollection} obj Optional instance to populate.
     * @return {module:model/FacetedCollection} The populated <code>FacetedCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FacetedCollection();
            JsonApiResponse.constructFromObject(data, obj);
            FacetedCollectionAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], Object);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = FacetedCollectionAllOfMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], Links);
            }
            if (data.hasOwnProperty('included')) {
                obj['included'] = ApiClient.convertToType(data['included'], Object);
            }
            if (data.hasOwnProperty('jsonapi')) {
                obj['jsonapi'] = ApiClient.convertToType(data['jsonapi'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FacetedCollection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FacetedCollection</code>.
     */
    static validateJSON(data) {
        // validate the optional field `meta`
        if (data['meta']) { // data not null
          FacetedCollectionAllOfMeta.validateJSON(data['meta']);
        }
        // validate the optional field `links`
        if (data['links']) { // data not null
          Links.validateJSON(data['links']);
        }

        return true;
    }


}



/**
 * @member {Object} errors
 */
FacetedCollection.prototype['errors'] = undefined;

/**
 * @member {module:model/FacetedCollectionAllOfMeta} meta
 */
FacetedCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/Links} links
 */
FacetedCollection.prototype['links'] = undefined;

/**
 * @member {Object} included
 */
FacetedCollection.prototype['included'] = undefined;

/**
 * @member {Object} jsonapi
 */
FacetedCollection.prototype['jsonapi'] = undefined;


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
// Implement FacetedCollectionAllOf interface:
/**
 * @member {module:model/FacetedCollectionAllOfMeta} meta
 */
FacetedCollectionAllOf.prototype['meta'] = undefined;
/**
 * @member {module:model/Links} links
 */
FacetedCollectionAllOf.prototype['links'] = undefined;




export default FacetedCollection;

