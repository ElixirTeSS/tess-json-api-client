/**
 * TeSS JSON-API
 * Testing the JSON-API API for TeSS. 
 *
 * OpenAPI spec version: 0.0.1
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ScientificTopic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ScientificTopic'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.WorkflowAttributes = factory(root.TessJsonApi.ApiClient, root.TessJsonApi.ScientificTopic);
  }
}(this, function(ApiClient, ScientificTopic) {
  'use strict';




  /**
   * The WorkflowAttributes model module.
   * @module model/WorkflowAttributes
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>WorkflowAttributes</code>.
   * @alias module:model/WorkflowAttributes
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>WorkflowAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkflowAttributes} obj Optional instance to populate.
   * @return {module:model/WorkflowAttributes} The populated <code>WorkflowAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('workflow_content')) {
        obj['workflow_content'] = ApiClient.convertToType(data['workflow_content'], Object);
      }
      if (data.hasOwnProperty('doi')) {
        obj['doi'] = ApiClient.convertToType(data['doi'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('keywords')) {
        obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
      }
      if (data.hasOwnProperty('licence')) {
        obj['licence'] = ApiClient.convertToType(data['licence'], 'String');
      }
      if (data.hasOwnProperty('difficulty_level')) {
        obj['difficulty_level'] = ApiClient.convertToType(data['difficulty_level'], 'String');
      }
      if (data.hasOwnProperty('authors')) {
        obj['authors'] = ApiClient.convertToType(data['authors'], ['String']);
      }
      if (data.hasOwnProperty('contributors')) {
        obj['contributors'] = ApiClient.convertToType(data['contributors'], ['String']);
      }
      if (data.hasOwnProperty('target_audience')) {
        obj['target_audience'] = ApiClient.convertToType(data['target_audience'], ['String']);
      }
      if (data.hasOwnProperty('scientific_topics')) {
        obj['scientific_topics'] = ApiClient.convertToType(data['scientific_topics'], [ScientificTopic]);
      }
    }
    return obj;
  }

  /**
   * The \"friendly\" identifier of the workflow.
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * The title of the workflow.
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * A succinct description of what the workflow is about.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The cytoscape.js JSON structure describing the workflow.
   * @member {Object} workflow_content
   */
  exports.prototype['workflow_content'] = undefined;
  /**
   * The DOI of the workflow.
   * @member {String} doi
   */
  exports.prototype['doi'] = undefined;
  /**
   * The date the workflow was first created on TeSS.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The date the workflow was last updated on TeSS.
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * A list of freetext keywords to describe the workflow.
   * @member {Array.<String>} keywords
   */
  exports.prototype['keywords'] = undefined;
  /**
   * The licence chosed to determine how the workflow may be re-used.
   * @member {String} licence
   */
  exports.prototype['licence'] = undefined;
  /**
   * The difficulty level comprehension of the workflow requires. Can be Beginner, Intermediate, Advanced, or Not specified.
   * @member {String} difficulty_level
   */
  exports.prototype['difficulty_level'] = undefined;
  /**
   * A list of people who wrote or helped write the workflow.
   * @member {Array.<String>} authors
   */
  exports.prototype['authors'] = undefined;
  /**
   * Any person who was not the author but contributed in some way. Maybe they produced some software used, reviewed the paper, or helped inspire the author.
   * @member {Array.<String>} contributors
   */
  exports.prototype['contributors'] = undefined;
  /**
   * The audience the material was intended for.
   * @member {Array.<String>} target_audience
   */
  exports.prototype['target_audience'] = undefined;
  /**
   * The classification of the workflow based on the EDAM ontologies scientific topics.
   * @member {Array.<module:model/ScientificTopic>} scientific_topics
   */
  exports.prototype['scientific_topics'] = undefined;



  return exports;
}));


