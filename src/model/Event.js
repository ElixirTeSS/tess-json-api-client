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
import EventResource from './EventResource';
import JsonApiResponse from './JsonApiResponse';





/**
* The Event model module.
* @module model/Event
* @version 0.2.0
*/
export default class Event {
    /**
    * Constructs a new <code>Event</code>.
    * @alias module:model/Event
    * @class
    * @extends module:model/JsonApiResponse
    */

    constructor() {
        

        JsonApiResponse.call(this);
        

        

        
    }

    /**
    * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Event} obj Optional instance to populate.
    * @return {module:model/Event} The populated <code>Event</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Event();

            

            JsonApiResponse.constructFromObject(data, obj);
            

            if (data.hasOwnProperty('data')) {
                obj['data'] = EventResource.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/EventResource} data
    */
    data = undefined;








}


