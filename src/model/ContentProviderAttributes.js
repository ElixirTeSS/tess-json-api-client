/**
 * TeSS JSON-API
 * An implementation of the API for ELIXIR's TeSS, following JSON-API (http://jsonapi.org/) standards.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: tess-support@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ContentProviderAttributes model module.
 * @module model/ContentProviderAttributes
 * @version 0.2.0
 */
class ContentProviderAttributes {
    /**
     * Constructs a new <code>ContentProviderAttributes</code>.
     * @alias module:model/ContentProviderAttributes
     */
    constructor() { 
        
        ContentProviderAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContentProviderAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContentProviderAttributes} obj Optional instance to populate.
     * @return {module:model/ContentProviderAttributes} The populated <code>ContentProviderAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContentProviderAttributes();

            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('image-url')) {
                obj['image-url'] = ApiClient.convertToType(data['image-url'], 'String');
            }
            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
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
     * Validates the JSON data with respect to <code>ContentProviderAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContentProviderAttributes</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['image-url'] && !(typeof data['image-url'] === 'string' || data['image-url'] instanceof String)) {
            throw new Error("Expected the field `image-url` to be a primitive type in the JSON string but got " + data['image-url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['keywords'])) {
            throw new Error("Expected the field `keywords` to be an array in the JSON data but got " + data['keywords']);
        }

        return true;
    }


}



/**
 * The \"friendly\" identifier of the content provider.
 * @member {String} slug
 */
ContentProviderAttributes.prototype['slug'] = undefined;

/**
 * The title of the content provider.
 * @member {String} title
 */
ContentProviderAttributes.prototype['title'] = undefined;

/**
 * A description of the content provider.
 * @member {String} description
 */
ContentProviderAttributes.prototype['description'] = undefined;

/**
 * The URL to the content provider's website.
 * @member {String} url
 */
ContentProviderAttributes.prototype['url'] = undefined;

/**
 * A URL to an image of the content provider's logo.
 * @member {String} image-url
 */
ContentProviderAttributes.prototype['image-url'] = undefined;

/**
 * A list of freetext keywords to describe the content provider.
 * @member {Array.<String>} keywords
 */
ContentProviderAttributes.prototype['keywords'] = undefined;

/**
 * The date the content provider was first created on TeSS
 * @member {Date} created-at
 */
ContentProviderAttributes.prototype['created-at'] = undefined;

/**
 * The date the content provider was last updated on TeSS
 * @member {Date} updated-at
 */
ContentProviderAttributes.prototype['updated-at'] = undefined;






export default ContentProviderAttributes;

