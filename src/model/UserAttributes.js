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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TessJsonApi) {
      root.TessJsonApi = {};
    }
    root.TessJsonApi.UserAttributes = factory(root.TessJsonApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserAttributes model module.
   * @module model/UserAttributes
   * @version 0.2.0
   */

  /**
   * Constructs a new <code>UserAttributes</code>.
   * @alias module:model/UserAttributes
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UserAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserAttributes} obj Optional instance to populate.
   * @return {module:model/UserAttributes} The populated <code>UserAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('slug')) {
        obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('surname')) {
        obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
      }
      if (data.hasOwnProperty('created-at')) {
        obj['created-at'] = ApiClient.convertToType(data['created-at'], 'Date');
      }
      if (data.hasOwnProperty('updated-at')) {
        obj['updated-at'] = ApiClient.convertToType(data['updated-at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The \"friendly\" identifier of the user.
   * @member {String} slug
   */
  exports.prototype['slug'] = undefined;
  /**
   * The user's first, or given, name.
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * The user's last, or family, name.
   * @member {String} surname
   */
  exports.prototype['surname'] = undefined;
  /**
   * The date the user registered on TeSS.
   * @member {Date} created-at
   */
  exports.prototype['created-at'] = undefined;
  /**
   * The date the user last updated their profile on TeSS.
   * @member {Date} updated-at
   */
  exports.prototype['updated-at'] = undefined;



  return exports;
}));


