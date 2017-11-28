/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TessJsonApi);
  }
}(this, function(expect, TessJsonApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TessJsonApi.WorkflowAttributes();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WorkflowAttributes', function() {
    it('should create an instance of WorkflowAttributes', function() {
      // uncomment below and update the code to test WorkflowAttributes
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be.a(TessJsonApi.WorkflowAttributes);
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property workflowContent (base name: "workflow-content")', function() {
      // uncomment below and update the code to test the property workflowContent
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property doi (base name: "doi")', function() {
      // uncomment below and update the code to test the property doi
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created-at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated-at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property keywords (base name: "keywords")', function() {
      // uncomment below and update the code to test the property keywords
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property licence (base name: "licence")', function() {
      // uncomment below and update the code to test the property licence
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property difficultyLevel (base name: "difficulty-level")', function() {
      // uncomment below and update the code to test the property difficultyLevel
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property authors (base name: "authors")', function() {
      // uncomment below and update the code to test the property authors
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property contributors (base name: "contributors")', function() {
      // uncomment below and update the code to test the property contributors
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property targetAudience (base name: "target-audience")', function() {
      // uncomment below and update the code to test the property targetAudience
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

    it('should have the property scientificTopics (base name: "scientific-topics")', function() {
      // uncomment below and update the code to test the property scientificTopics
      //var instane = new TessJsonApi.WorkflowAttributes();
      //expect(instance).to.be();
    });

  });

}));
