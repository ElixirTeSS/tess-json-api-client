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
import JsonApiResponse from './JsonApiResponse';
import UserAllOf from './UserAllOf';
import UserResource from './UserResource';

/**
 * The User model module.
 * @module model/User
 * @version 1.4.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     * @implements module:model/JsonApiResponse
     * @implements module:model/UserAllOf
     */
    constructor() { 
        JsonApiResponse.initialize(this);UserAllOf.initialize(this);
        User.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();
            JsonApiResponse.constructFromObject(data, obj);
            UserAllOf.constructFromObject(data, obj);

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
                obj['data'] = UserResource.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>User</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          UserResource.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {Object} errors
 */
User.prototype['errors'] = undefined;

/**
 * @member {Object} meta
 */
User.prototype['meta'] = undefined;

/**
 * @member {Object} links
 */
User.prototype['links'] = undefined;

/**
 * @member {Object} included
 */
User.prototype['included'] = undefined;

/**
 * @member {Object} jsonapi
 */
User.prototype['jsonapi'] = undefined;

/**
 * @member {module:model/UserResource} data
 */
User.prototype['data'] = undefined;


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
// Implement UserAllOf interface:
/**
 * @member {module:model/UserResource} data
 */
UserAllOf.prototype['data'] = undefined;




export default User;

