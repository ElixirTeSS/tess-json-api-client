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
import Facet from './Facet';

/**
 * The FacetedCollectionAllOfMeta model module.
 * @module model/FacetedCollectionAllOfMeta
 * @version 1.4.0
 */
class FacetedCollectionAllOfMeta {
    /**
     * Constructs a new <code>FacetedCollectionAllOfMeta</code>.
     * @alias module:model/FacetedCollectionAllOfMeta
     */
    constructor() { 
        
        FacetedCollectionAllOfMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['query'] = '';
    }

    /**
     * Constructs a <code>FacetedCollectionAllOfMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FacetedCollectionAllOfMeta} obj Optional instance to populate.
     * @return {module:model/FacetedCollectionAllOfMeta} The populated <code>FacetedCollectionAllOfMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FacetedCollectionAllOfMeta();

            if (data.hasOwnProperty('results-count')) {
                obj['results-count'] = ApiClient.convertToType(data['results-count'], 'Number');
            }
            if (data.hasOwnProperty('query')) {
                obj['query'] = ApiClient.convertToType(data['query'], 'String');
            }
            if (data.hasOwnProperty('facets')) {
                obj['facets'] = ApiClient.convertToType(data['facets'], {'String': ['String']});
            }
            if (data.hasOwnProperty('available-facets')) {
                obj['available-facets'] = ApiClient.convertToType(data['available-facets'], {'String': [Facet]});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FacetedCollectionAllOfMeta</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FacetedCollectionAllOfMeta</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['query'] && !(typeof data['query'] === 'string' || data['query'] instanceof String)) {
            throw new Error("Expected the field `query` to be a primitive type in the JSON string but got " + data['query']);
        }

        return true;
    }


}



/**
 * The total number of results in the collection.
 * @member {Number} results-count
 */
FacetedCollectionAllOfMeta.prototype['results-count'] = undefined;

/**
 * Search keywords.
 * @member {String} query
 * @default ''
 */
FacetedCollectionAllOfMeta.prototype['query'] = '';

/**
 * The filters that are currently applied to the collection.
 * @member {Object.<String, Array.<String>>} facets
 */
FacetedCollectionAllOfMeta.prototype['facets'] = undefined;

/**
 * The set of filters that are available to be applied to the collection.
 * @member {Object.<String, Array.<module:model/Facet>>} available-facets
 */
FacetedCollectionAllOfMeta.prototype['available-facets'] = undefined;






export default FacetedCollectionAllOfMeta;

