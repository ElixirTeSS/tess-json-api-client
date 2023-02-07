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
import CollectionCollectionAllOf from './CollectionCollectionAllOf';
import CollectionResource from './CollectionResource';
import FacetedCollection from './FacetedCollection';
import FacetedCollectionAllOfMeta from './FacetedCollectionAllOfMeta';
import Links from './Links';

/**
 * The CollectionCollection model module.
 * @module model/CollectionCollection
 * @version 1.3.0
 */
class CollectionCollection {
    /**
     * Constructs a new <code>CollectionCollection</code>.
     * @alias module:model/CollectionCollection
     * @implements module:model/FacetedCollection
     * @implements module:model/CollectionCollectionAllOf
     */
    constructor() { 
        FacetedCollection.initialize(this);CollectionCollectionAllOf.initialize(this);
        CollectionCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CollectionCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionCollection} obj Optional instance to populate.
     * @return {module:model/CollectionCollection} The populated <code>CollectionCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectionCollection();
            FacetedCollection.constructFromObject(data, obj);
            CollectionCollectionAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [CollectionResource]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CollectionCollection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CollectionCollection</code>.
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
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                CollectionResource.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {Object} errors
 */
CollectionCollection.prototype['errors'] = undefined;

/**
 * @member {module:model/FacetedCollectionAllOfMeta} meta
 */
CollectionCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/Links} links
 */
CollectionCollection.prototype['links'] = undefined;

/**
 * @member {Object} included
 */
CollectionCollection.prototype['included'] = undefined;

/**
 * @member {Object} jsonapi
 */
CollectionCollection.prototype['jsonapi'] = undefined;

/**
 * @member {Array.<module:model/CollectionResource>} data
 */
CollectionCollection.prototype['data'] = undefined;


// Implement FacetedCollection interface:
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
// Implement CollectionCollectionAllOf interface:
/**
 * @member {Array.<module:model/CollectionResource>} data
 */
CollectionCollectionAllOf.prototype['data'] = undefined;




export default CollectionCollection;

