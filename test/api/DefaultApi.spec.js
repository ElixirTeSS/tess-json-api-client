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
    instance = new TessJsonApi.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('contentProvidersGet', function() {
      it('should call contentProvidersGet successfully', function(done) {
        //uncomment below and update the code to test contentProvidersGet
        //instance.contentProvidersGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contentProvidersSlugGet', function() {
      it('should call contentProvidersSlugGet successfully', function(done) {
        //uncomment below and update the code to test contentProvidersSlugGet
        //instance.contentProvidersSlugGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventsGet', function() {
      it('should call eventsGet successfully', function(done) {
        //uncomment below and update the code to test eventsGet
        //instance.eventsGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventsSlugGet', function() {
      it('should call eventsSlugGet successfully', function(done) {
        //uncomment below and update the code to test eventsSlugGet
        //instance.eventsSlugGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('materialsGet', function() {
      it('should call materialsGet successfully', function(done) {
        //uncomment below and update the code to test materialsGet
        //instance.materialsGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('materialsSlugGet', function() {
      it('should call materialsSlugGet successfully', function(done) {
        //uncomment below and update the code to test materialsSlugGet
        //instance.materialsSlugGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersGet', function() {
      it('should call usersGet successfully', function(done) {
        //uncomment below and update the code to test usersGet
        //instance.usersGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersSlugGet', function() {
      it('should call usersSlugGet successfully', function(done) {
        //uncomment below and update the code to test usersSlugGet
        //instance.usersSlugGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('workflowsGet', function() {
      it('should call workflowsGet successfully', function(done) {
        //uncomment below and update the code to test workflowsGet
        //instance.workflowsGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('workflowsSlugGet', function() {
      it('should call workflowsSlugGet successfully', function(done) {
        //uncomment below and update the code to test workflowsSlugGet
        //instance.workflowsSlugGet(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
