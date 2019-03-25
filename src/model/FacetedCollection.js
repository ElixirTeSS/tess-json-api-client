/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * OpenAPI spec version: 0.2.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import FacetedCollectionMeta from './FacetedCollectionMeta';
import JsonApiResponse from './JsonApiResponse';





/**
* The FacetedCollection model module.
* @module model/FacetedCollection
* @version 0.2.0
*/
export default class FacetedCollection {
    /**
    * Constructs a new <code>FacetedCollection</code>.
    * @alias module:model/FacetedCollection
    * @class
    * @extends module:model/JsonApiResponse
    */

    constructor() {
        

        JsonApiResponse.call(this);
        

        

        
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
            

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = FacetedCollectionMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], Object);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/FacetedCollectionMeta} meta
    */
    meta = undefined;
    /**
    * @member {Object} links
    */
    links = undefined;








}


