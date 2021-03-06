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
    define(['ApiClient', 'model/Workflow', 'model/WorkflowCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Workflow'), require('../model/WorkflowCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.WorkflowsApi = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.Workflow, root.TessJsonApi.WorkflowCollection);
  }
}(this, function(ApiClient, Workflow, WorkflowCollection) {
  'use strict';

  /**
   * Workflows service.
   * @module api/WorkflowsApi
   * @version 0.2.0
   */

  /**
   * Constructs a new WorkflowsApi. 
   * @alias module:api/WorkflowsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the workflowsGet operation.
     * @callback module:api/WorkflowsApi~workflowsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Search keywords.
     * @param {Number} opts.pageNumber The page of the collection to view. (default to 1)
     * @param {Number} opts.pageSize The number of results to return per page. (default to 30)
     * @param {module:model/String} opts.sort Sort order:  * default - sort by date (for Events), sort by number of resources (for Content Providers) otherwise sort by title (default).  * new - Sort by when the entry was created.  * mod - Sort by when the entry was last modified.  * rel - Sort by search query relevance.  * early - Sort by date, earliest to latest (Events only).  * late - Sort by date, latest to earliest (Events only). 
     * @param {Array.<String>} opts.authors Filter by author.
     * @param {Array.<String>} opts.contributors Filter by contributor.
     * @param {Array.<module:model/String>} opts.difficultyLevel Filter by difficulty level.
     * @param {Array.<String>} opts.keywords Filter by keywords.
     * @param {Array.<String>} opts.licence Filter by licence. See http://licenses.opendefinition.org/licenses/groups/all.json
     * @param {Array.<String>} opts.scientificTopics Filter by scientific topics.
     * @param {Array.<String>} opts.targetAudience Filter by who the intended target audience is.
     * @param {module:api/WorkflowsApi~workflowsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowCollection}
     */
    this.workflowsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'q': opts['q'],
        'page_number': opts['pageNumber'],
        'page_size': opts['pageSize'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
        'authors[]': {
          value: opts['authors'],
          collectionFormat: 'multi'
        },
        'contributors[]': {
          value: opts['contributors'],
          collectionFormat: 'multi'
        },
        'difficulty_level[]': {
          value: opts['difficultyLevel'],
          collectionFormat: 'multi'
        },
        'keywords[]': {
          value: opts['keywords'],
          collectionFormat: 'multi'
        },
        'licence[]': {
          value: opts['licence'],
          collectionFormat: 'multi'
        },
        'scientific_topics[]': {
          value: opts['scientificTopics'],
          collectionFormat: 'multi'
        },
        'target_audience[]': {
          value: opts['targetAudience'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/vnd.api+json'];
      var accepts = ['application/vnd.api+json'];
      var returnType = WorkflowCollection;

      return this.apiClient.callApi(
        '/workflows', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowsSlugGet operation.
     * @callback module:api/WorkflowsApi~workflowsSlugGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workflow} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} slug The _slug_ id of an workflow e.g. ember
     * @param {module:api/WorkflowsApi~workflowsSlugGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workflow}
     */
    this.workflowsSlugGet = function(slug, callback) {
      var postBody = null;

      // verify the required parameter 'slug' is set
      if (slug === undefined || slug === null) {
        throw new Error("Missing the required parameter 'slug' when calling workflowsSlugGet");
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
      var returnType = Workflow;

      return this.apiClient.callApi(
        '/workflows/{slug}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
