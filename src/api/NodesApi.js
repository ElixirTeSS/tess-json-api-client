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


import ApiClient from "../ApiClient";
import Node from '../model/Node';
import NodeCollection from '../model/NodeCollection';

/**
* Nodes service.
* @module api/NodesApi
* @version 1.3.0
*/
export default class NodesApi {

    /**
    * Constructs a new NodesApi. 
    * @alias module:api/NodesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the nodesGet operation.
     * @callback module:api/NodesApi~nodesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Search keywords.
     * @param {Number} opts.pageNumber The page of the node collection to view. (default to 1)
     * @param {Number} opts.pageSize The number of results to return per page. (default to 30)
     * @param {module:model/String} opts.sort Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
     * @param {Array.<String>} opts.keywords Filter by keywords.
     * @param {module:api/NodesApi~nodesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NodeCollection}
     */
    nodesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'page_number': opts['pageNumber'],
        'page_size': opts['pageSize'],
        'sort': opts['sort'],
        'keywords[]': this.apiClient.buildCollectionParam(opts['keywords'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/vnd.api+json'];
      let returnType = NodeCollection;
      return this.apiClient.callApi(
        '/nodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the nodesSlugGet operation.
     * @callback module:api/NodesApi~nodesSlugGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Node} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} slug The _slug_ id of a node e.g. belgium
     * @param {module:api/NodesApi~nodesSlugGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Node}
     */
    nodesSlugGet(slug, callback) {
      let postBody = null;
      // verify the required parameter 'slug' is set
      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling nodesSlugGet");
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
      let returnType = Node;
      return this.apiClient.callApi(
        '/nodes/{slug}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
