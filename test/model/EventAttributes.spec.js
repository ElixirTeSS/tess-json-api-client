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
    instance = new TessJsonApi.EventAttributes();
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

  describe('EventAttributes', function() {
    it('should create an instance of EventAttributes', function() {
      // uncomment below and update the code to test EventAttributes
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be.a(TessJsonApi.EventAttributes);
    });

    it('should have the property slug (base name: "slug")', function() {
      // uncomment below and update the code to test the property slug
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property subtitle (base name: "subtitle")', function() {
      // uncomment below and update the code to test the property subtitle
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property organizer (base name: "organizer")', function() {
      // uncomment below and update the code to test the property organizer
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property end (base name: "end")', function() {
      // uncomment below and update the code to test the property end
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property sponsor (base name: "sponsor")', function() {
      // uncomment below and update the code to test the property sponsor
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property venue (base name: "venue")', function() {
      // uncomment below and update the code to test the property venue
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property county (base name: "county")', function() {
      // uncomment below and update the code to test the property county
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property postcode (base name: "postcode")', function() {
      // uncomment below and update the code to test the property postcode
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created-at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated-at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property keywords (base name: "keywords")', function() {
      // uncomment below and update the code to test the property keywords
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property eventTypes (base name: "event-types")', function() {
      // uncomment below and update the code to test the property eventTypes
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property targetAudience (base name: "target-audience")', function() {
      // uncomment below and update the code to test the property targetAudience
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property eligibility (base name: "eligibility")', function() {
      // uncomment below and update the code to test the property eligibility
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property hostInstitutions (base name: "host-institutions")', function() {
      // uncomment below and update the code to test the property hostInstitutions
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property scientificTopics (base name: "scientific-topics")', function() {
      // uncomment below and update the code to test the property scientificTopics
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

    it('should have the property externalResources (base name: "external-resources")', function() {
      // uncomment below and update the code to test the property externalResources
      //var instane = new TessJsonApi.EventAttributes();
      //expect(instance).to.be();
    });

  });

}));
