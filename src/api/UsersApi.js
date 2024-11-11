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


import ApiClient from "../ApiClient";
import User from '../model/User';
import UserCollection from '../model/UserCollection';

/**
* Users service.
* @module api/UsersApi
* @version 1.4.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the usersGet operation.
     * @callback module:api/UsersApi~usersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/UsersApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserCollection}
     */
    usersGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = UserCollection;
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersSlugGet operation.
     * @callback module:api/UsersApi~usersSlugGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} slug The _slug_ id of a user e.g. niall.beard
     * @param {module:api/UsersApi~usersSlugGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    usersSlugGet(slug, callback) {
      let postBody = null;
      // verify the required parameter 'slug' is set
      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling usersSlugGet");
      }

      let pathParams = {
        'slug': slug
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/users/{slug}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
