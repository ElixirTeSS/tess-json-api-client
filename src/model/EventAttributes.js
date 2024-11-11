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

import ApiClient from '../ApiClient';
import EventAttributesReport from './EventAttributesReport';
import ExternalResource from './ExternalResource';
import OntologyTerm from './OntologyTerm';

/**
 * The EventAttributes model module.
 * @module model/EventAttributes
 * @version 1.4.0
 */
class EventAttributes {
    /**
     * Constructs a new <code>EventAttributes</code>.
     * @alias module:model/EventAttributes
     * @param title {String} The title of the event.
     * @param url {String} The URL where the actual event can be found.
     */
    constructor(title, url) { 
        
        EventAttributes.initialize(this, title, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, url) { 
        obj['title'] = title;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>EventAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventAttributes} obj Optional instance to populate.
     * @return {module:model/EventAttributes} The populated <code>EventAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventAttributes();

            if (data.hasOwnProperty('slug')) {
                obj['slug'] = ApiClient.convertToType(data['slug'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('subtitle')) {
                obj['subtitle'] = ApiClient.convertToType(data['subtitle'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('organizer')) {
                obj['organizer'] = ApiClient.convertToType(data['organizer'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'Date');
            }
            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'Date');
            }
            if (data.hasOwnProperty('sponsor')) {
                obj['sponsor'] = ApiClient.convertToType(data['sponsor'], 'String');
            }
            if (data.hasOwnProperty('venue')) {
                obj['venue'] = ApiClient.convertToType(data['venue'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('county')) {
                obj['county'] = ApiClient.convertToType(data['county'], 'String');
            }
            if (data.hasOwnProperty('postcode')) {
                obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'String');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'String');
            }
            if (data.hasOwnProperty('created-at')) {
                obj['created-at'] = ApiClient.convertToType(data['created-at'], 'Date');
            }
            if (data.hasOwnProperty('updated-at')) {
                obj['updated-at'] = ApiClient.convertToType(data['updated-at'], 'Date');
            }
            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], ['String']);
            }
            if (data.hasOwnProperty('event-types')) {
                obj['event-types'] = ApiClient.convertToType(data['event-types'], ['String']);
            }
            if (data.hasOwnProperty('target-audience')) {
                obj['target-audience'] = ApiClient.convertToType(data['target-audience'], ['String']);
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
            if (data.hasOwnProperty('eligibility')) {
                obj['eligibility'] = ApiClient.convertToType(data['eligibility'], ['String']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
            }
            if (data.hasOwnProperty('host-institutions')) {
                obj['host-institutions'] = ApiClient.convertToType(data['host-institutions'], ['String']);
            }
            if (data.hasOwnProperty('scientific-topics')) {
                obj['scientific-topics'] = ApiClient.convertToType(data['scientific-topics'], [OntologyTerm]);
            }
            if (data.hasOwnProperty('operations')) {
                obj['operations'] = ApiClient.convertToType(data['operations'], [OntologyTerm]);
            }
            if (data.hasOwnProperty('external-resources')) {
                obj['external-resources'] = ApiClient.convertToType(data['external-resources'], [ExternalResource]);
            }
            if (data.hasOwnProperty('report')) {
                obj['report'] = EventAttributesReport.constructFromObject(data['report']);
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], ['String']);
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('sponsors')) {
                obj['sponsors'] = ApiClient.convertToType(data['sponsors'], ['String']);
            }
            if (data.hasOwnProperty('online')) {
                obj['online'] = ApiClient.convertToType(data['online'], 'Boolean');
            }
            if (data.hasOwnProperty('presence')) {
                obj['presence'] = ApiClient.convertToType(data['presence'], 'String');
            }
            if (data.hasOwnProperty('cost-basis')) {
                obj['cost-basis'] = ApiClient.convertToType(data['cost-basis'], 'String');
            }
            if (data.hasOwnProperty('cost-value')) {
                obj['cost-value'] = ApiClient.convertToType(data['cost-value'], 'String');
            }
            if (data.hasOwnProperty('cost-currency')) {
                obj['cost-currency'] = ApiClient.convertToType(data['cost-currency'], 'String');
            }
            if (data.hasOwnProperty('recognition')) {
                obj['recognition'] = ApiClient.convertToType(data['recognition'], 'String');
            }
            if (data.hasOwnProperty('learning-objectives')) {
                obj['learning-objectives'] = ApiClient.convertToType(data['learning-objectives'], 'String');
            }
            if (data.hasOwnProperty('prerequisites')) {
                obj['prerequisites'] = ApiClient.convertToType(data['prerequisites'], 'String');
            }
            if (data.hasOwnProperty('tech-requirements')) {
                obj['tech-requirements'] = ApiClient.convertToType(data['tech-requirements'], 'String');
            }
            if (data.hasOwnProperty('external-id')) {
                obj['external-id'] = ApiClient.convertToType(data['external-id'], 'String');
            }
            if (data.hasOwnProperty('last-scraped')) {
                obj['last-scraped'] = ApiClient.convertToType(data['last-scraped'], 'Date');
            }
            if (data.hasOwnProperty('scraper-record')) {
                obj['scraper-record'] = ApiClient.convertToType(data['scraper-record'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventAttributes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventAttributes</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EventAttributes.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['slug'] && !(typeof data['slug'] === 'string' || data['slug'] instanceof String)) {
            throw new Error("Expected the field `slug` to be a primitive type in the JSON string but got " + data['slug']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['subtitle'] && !(typeof data['subtitle'] === 'string' || data['subtitle'] instanceof String)) {
            throw new Error("Expected the field `subtitle` to be a primitive type in the JSON string but got " + data['subtitle']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is a string
        if (data['organizer'] && !(typeof data['organizer'] === 'string' || data['organizer'] instanceof String)) {
            throw new Error("Expected the field `organizer` to be a primitive type in the JSON string but got " + data['organizer']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['sponsor'] && !(typeof data['sponsor'] === 'string' || data['sponsor'] instanceof String)) {
            throw new Error("Expected the field `sponsor` to be a primitive type in the JSON string but got " + data['sponsor']);
        }
        // ensure the json data is a string
        if (data['venue'] && !(typeof data['venue'] === 'string' || data['venue'] instanceof String)) {
            throw new Error("Expected the field `venue` to be a primitive type in the JSON string but got " + data['venue']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['country'] && !(typeof data['country'] === 'string' || data['country'] instanceof String)) {
            throw new Error("Expected the field `country` to be a primitive type in the JSON string but got " + data['country']);
        }
        // ensure the json data is a string
        if (data['county'] && !(typeof data['county'] === 'string' || data['county'] instanceof String)) {
            throw new Error("Expected the field `county` to be a primitive type in the JSON string but got " + data['county']);
        }
        // ensure the json data is a string
        if (data['postcode'] && !(typeof data['postcode'] === 'string' || data['postcode'] instanceof String)) {
            throw new Error("Expected the field `postcode` to be a primitive type in the JSON string but got " + data['postcode']);
        }
        // ensure the json data is a string
        if (data['latitude'] && !(typeof data['latitude'] === 'string' || data['latitude'] instanceof String)) {
            throw new Error("Expected the field `latitude` to be a primitive type in the JSON string but got " + data['latitude']);
        }
        // ensure the json data is a string
        if (data['longitude'] && !(typeof data['longitude'] === 'string' || data['longitude'] instanceof String)) {
            throw new Error("Expected the field `longitude` to be a primitive type in the JSON string but got " + data['longitude']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['keywords'])) {
            throw new Error("Expected the field `keywords` to be an array in the JSON data but got " + data['keywords']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['event-types'])) {
            throw new Error("Expected the field `event-types` to be an array in the JSON data but got " + data['event-types']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['target-audience'])) {
            throw new Error("Expected the field `target-audience` to be an array in the JSON data but got " + data['target-audience']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['eligibility'])) {
            throw new Error("Expected the field `eligibility` to be an array in the JSON data but got " + data['eligibility']);
        }
        // ensure the json data is a string
        if (data['contact'] && !(typeof data['contact'] === 'string' || data['contact'] instanceof String)) {
            throw new Error("Expected the field `contact` to be a primitive type in the JSON string but got " + data['contact']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['host-institutions'])) {
            throw new Error("Expected the field `host-institutions` to be an array in the JSON data but got " + data['host-institutions']);
        }
        if (data['scientific-topics']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['scientific-topics'])) {
                throw new Error("Expected the field `scientific-topics` to be an array in the JSON data but got " + data['scientific-topics']);
            }
            // validate the optional field `scientific-topics` (array)
            for (const item of data['scientific-topics']) {
                OntologyTerm.validateJSON(item);
            };
        }
        if (data['operations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['operations'])) {
                throw new Error("Expected the field `operations` to be an array in the JSON data but got " + data['operations']);
            }
            // validate the optional field `operations` (array)
            for (const item of data['operations']) {
                OntologyTerm.validateJSON(item);
            };
        }
        if (data['external-resources']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['external-resources'])) {
                throw new Error("Expected the field `external-resources` to be an array in the JSON data but got " + data['external-resources']);
            }
            // validate the optional field `external-resources` (array)
            for (const item of data['external-resources']) {
                ExternalResource.validateJSON(item);
            };
        }
        // validate the optional field `report`
        if (data['report']) { // data not null
          EventAttributesReport.validateJSON(data['report']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['fields'])) {
            throw new Error("Expected the field `fields` to be an array in the JSON data but got " + data['fields']);
        }
        // ensure the json data is a string
        if (data['duration'] && !(typeof data['duration'] === 'string' || data['duration'] instanceof String)) {
            throw new Error("Expected the field `duration` to be a primitive type in the JSON string but got " + data['duration']);
        }
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['sponsors'])) {
            throw new Error("Expected the field `sponsors` to be an array in the JSON data but got " + data['sponsors']);
        }
        // ensure the json data is a string
        if (data['presence'] && !(typeof data['presence'] === 'string' || data['presence'] instanceof String)) {
            throw new Error("Expected the field `presence` to be a primitive type in the JSON string but got " + data['presence']);
        }
        // ensure the json data is a string
        if (data['cost-basis'] && !(typeof data['cost-basis'] === 'string' || data['cost-basis'] instanceof String)) {
            throw new Error("Expected the field `cost-basis` to be a primitive type in the JSON string but got " + data['cost-basis']);
        }
        // ensure the json data is a string
        if (data['cost-value'] && !(typeof data['cost-value'] === 'string' || data['cost-value'] instanceof String)) {
            throw new Error("Expected the field `cost-value` to be a primitive type in the JSON string but got " + data['cost-value']);
        }
        // ensure the json data is a string
        if (data['cost-currency'] && !(typeof data['cost-currency'] === 'string' || data['cost-currency'] instanceof String)) {
            throw new Error("Expected the field `cost-currency` to be a primitive type in the JSON string but got " + data['cost-currency']);
        }
        // ensure the json data is a string
        if (data['recognition'] && !(typeof data['recognition'] === 'string' || data['recognition'] instanceof String)) {
            throw new Error("Expected the field `recognition` to be a primitive type in the JSON string but got " + data['recognition']);
        }
        // ensure the json data is a string
        if (data['learning-objectives'] && !(typeof data['learning-objectives'] === 'string' || data['learning-objectives'] instanceof String)) {
            throw new Error("Expected the field `learning-objectives` to be a primitive type in the JSON string but got " + data['learning-objectives']);
        }
        // ensure the json data is a string
        if (data['prerequisites'] && !(typeof data['prerequisites'] === 'string' || data['prerequisites'] instanceof String)) {
            throw new Error("Expected the field `prerequisites` to be a primitive type in the JSON string but got " + data['prerequisites']);
        }
        // ensure the json data is a string
        if (data['tech-requirements'] && !(typeof data['tech-requirements'] === 'string' || data['tech-requirements'] instanceof String)) {
            throw new Error("Expected the field `tech-requirements` to be a primitive type in the JSON string but got " + data['tech-requirements']);
        }
        // ensure the json data is a string
        if (data['external-id'] && !(typeof data['external-id'] === 'string' || data['external-id'] instanceof String)) {
            throw new Error("Expected the field `external-id` to be a primitive type in the JSON string but got " + data['external-id']);
        }

        return true;
    }


}

EventAttributes.RequiredProperties = ["title", "url"];

/**
 * The \"friendly\" identifier of the event.
 * @member {String} slug
 */
EventAttributes.prototype['slug'] = undefined;

/**
 * The title of the event.
 * @member {String} title
 */
EventAttributes.prototype['title'] = undefined;

/**
 * The subtitle of the event.
 * @member {String} subtitle
 */
EventAttributes.prototype['subtitle'] = undefined;

/**
 * The URL where the actual event can be found.
 * @member {String} url
 */
EventAttributes.prototype['url'] = undefined;

/**
 * The organization responsible for creating the event.
 * @member {String} organizer
 */
EventAttributes.prototype['organizer'] = undefined;

/**
 * A succinct description of what the event is about.
 * @member {String} description
 */
EventAttributes.prototype['description'] = undefined;

/**
 * The date and time at which the event starts.
 * @member {Date} start
 */
EventAttributes.prototype['start'] = undefined;

/**
 * The date and time at which the event ends.
 * @member {Date} end
 */
EventAttributes.prototype['end'] = undefined;

/**
 * The person or organization that is sponsoring the event.
 * @member {String} sponsor
 */
EventAttributes.prototype['sponsor'] = undefined;

/**
 * The name of the building where the event will be hosted.
 * @member {String} venue
 */
EventAttributes.prototype['venue'] = undefined;

/**
 * The city the where event will be hosted.
 * @member {String} city
 */
EventAttributes.prototype['city'] = undefined;

/**
 * The regional where county the event will be hosted.
 * @member {String} country
 */
EventAttributes.prototype['country'] = undefined;

/**
 * The name of country where the event will be hosted.
 * @member {String} county
 */
EventAttributes.prototype['county'] = undefined;

/**
 * The postcode of the venue hosting the event.
 * @member {String} postcode
 */
EventAttributes.prototype['postcode'] = undefined;

/**
 * The latitude co-ordinate of the event.
 * @member {String} latitude
 */
EventAttributes.prototype['latitude'] = undefined;

/**
 * The longitude co-ordinate of the event.
 * @member {String} longitude
 */
EventAttributes.prototype['longitude'] = undefined;

/**
 * The date the event was first created on TeSS.
 * @member {Date} created-at
 */
EventAttributes.prototype['created-at'] = undefined;

/**
 * The date the event was last updated on TeSS.
 * @member {Date} updated-at
 */
EventAttributes.prototype['updated-at'] = undefined;

/**
 * A series of freetext words used to describe an event.
 * @member {Array.<String>} keywords
 */
EventAttributes.prototype['keywords'] = undefined;

/**
 * The category of the event. This could be a meeting or a course; or if unknown or neither, an event.
 * @member {Array.<String>} event-types
 */
EventAttributes.prototype['event-types'] = undefined;

/**
 * The intended audience of the event. This can includes things like scientific discpline and expertise level.
 * @member {Array.<String>} target-audience
 */
EventAttributes.prototype['target-audience'] = undefined;

/**
 * The number of people allowed to attend the event.
 * @member {Number} capacity
 */
EventAttributes.prototype['capacity'] = undefined;

/**
 * Various criteria require to participate in the event.
 * @member {Array.<String>} eligibility
 */
EventAttributes.prototype['eligibility'] = undefined;

/**
 * The name and/or contact details of a person or institution organizing the event.
 * @member {String} contact
 */
EventAttributes.prototype['contact'] = undefined;

/**
 * The institution physically hosting the event.
 * @member {Array.<String>} host-institutions
 */
EventAttributes.prototype['host-institutions'] = undefined;

/**
 * The classification of the event based on the EDAM ontology's topics branch.
 * @member {Array.<module:model/OntologyTerm>} scientific-topics
 */
EventAttributes.prototype['scientific-topics'] = undefined;

/**
 * The classification of the event based on the EDAM ontology's operations branch.
 * @member {Array.<module:model/OntologyTerm>} operations
 */
EventAttributes.prototype['operations'] = undefined;

/**
 * A list of external resources associated with this tool. These are largely tools from bio.tools, and standards, databases, and policies from biosharing.org - but can be anything.
 * @member {Array.<module:model/ExternalResource>} external-resources
 */
EventAttributes.prototype['external-resources'] = undefined;

/**
 * @member {module:model/EventAttributesReport} report
 */
EventAttributes.prototype['report'] = undefined;

/**
 * ARDC Fields of Research codes that describe the event.
 * @member {Array.<String>} fields
 */
EventAttributes.prototype['fields'] = undefined;

/**
 * How long the event lasts.
 * @member {String} duration
 */
EventAttributes.prototype['duration'] = undefined;

/**
 * The timezone in which the event takes place. e.g. Europe/Brussels
 * @member {String} timezone
 */
EventAttributes.prototype['timezone'] = undefined;

/**
 * Who sponsored, or funded the event.
 * @member {Array.<String>} sponsors
 */
EventAttributes.prototype['sponsors'] = undefined;

/**
 * Does the event take place online?
 * @member {Boolean} online
 */
EventAttributes.prototype['online'] = undefined;

/**
 * Is the event onsite (face-to-face), online or hybrid?
 * @member {module:model/EventAttributes.PresenceEnum} presence
 */
EventAttributes.prototype['presence'] = undefined;

/**
 * Whether costs are incurred by the event, and who needs to pay
 * @member {String} cost-basis
 */
EventAttributes.prototype['cost-basis'] = undefined;

/**
 * The cost of attending the event.
 * @member {String} cost-value
 */
EventAttributes.prototype['cost-value'] = undefined;

/**
 * The currency of the event's cost.
 * @member {String} cost-currency
 */
EventAttributes.prototype['cost-currency'] = undefined;

/**
 * A description of any qualifications, awards, certificates, diplomas, or other educational credentials that will be awarded on successful completion of the training event.
 * @member {String} recognition
 */
EventAttributes.prototype['recognition'] = undefined;

/**
 * A description of what knowledge, skills, or abilities are gained from attending the event.
 * @member {String} learning-objectives
 */
EventAttributes.prototype['learning-objectives'] = undefined;

/**
 * A description of what knowledge attendees should have before attending the event.
 * @member {String} prerequisites
 */
EventAttributes.prototype['prerequisites'] = undefined;

/**
 * What technical requirements (e.g. software, hardware) are needed for participants of the event.
 * @member {String} tech-requirements
 */
EventAttributes.prototype['tech-requirements'] = undefined;

/**
 * If the event is from an external source, this is the unique identifier of the event in that source.
 * @member {String} external-id
 */
EventAttributes.prototype['external-id'] = undefined;

/**
 * The date that the event was last harvested by TeSS.
 * @member {Date} last-scraped
 */
EventAttributes.prototype['last-scraped'] = undefined;

/**
 * Was this event automatically harvested (as opposed to being submitted manually)?
 * @member {Boolean} scraper-record
 */
EventAttributes.prototype['scraper-record'] = undefined;





/**
 * Allowed values for the <code>presence</code> property.
 * @enum {String}
 * @readonly
 */
EventAttributes['PresenceEnum'] = {

    /**
     * value: "onsite"
     * @const
     */
    "onsite": "onsite",

    /**
     * value: "online"
     * @const
     */
    "online": "online",

    /**
     * value: "hybrid"
     * @const
     */
    "hybrid": "hybrid"
};



export default EventAttributes;

