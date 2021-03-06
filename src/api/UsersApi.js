/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * OpenAPI spec version: 0.2.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/User', 'model/UserCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'), require('../model/UserCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.UsersApi = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.User, root.TessJsonApi.UserCollection);
  }
}(this, function(ApiClient, User, UserCollection) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 0.2.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
    this.usersGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = UserCollection;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
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
     * @param {String} slug The _slug_ id of an user e.g. niall.beard
     * @param {module:api/UsersApi~usersSlugGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.usersSlugGet = function(slug, callback) {
      var postBody = null;

      // verify the required parameter 'slug' is set
      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling usersSlugGet");
      }


      var pathParams = {
        'slug': slug
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users/{slug}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
