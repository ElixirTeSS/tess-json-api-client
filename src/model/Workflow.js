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
import JsonApiResponse from './JsonApiResponse';
import WorkflowResource from './WorkflowResource';





/**
* The Workflow model module.
* @module model/Workflow
* @version 0.2.0
*/
export default class Workflow {
    /**
    * Constructs a new <code>Workflow</code>.
    * @alias module:model/Workflow
    * @class
    * @extends module:model/JsonApiResponse
    */

    constructor() {
        

        JsonApiResponse.call(this);
        

        

        
    }

    /**
    * Constructs a <code>Workflow</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Workflow} obj Optional instance to populate.
    * @return {module:model/Workflow} The populated <code>Workflow</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Workflow();

            

            JsonApiResponse.constructFromObject(data, obj);
            

            if (data.hasOwnProperty('data')) {
                obj['data'] = WorkflowResource.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/WorkflowResource} data
    */
    data = undefined;








}


