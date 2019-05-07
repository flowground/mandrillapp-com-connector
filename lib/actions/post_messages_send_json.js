/**
 * Auto-generated action file for "Mandrill" API.
 *
 * Generated at: 2019-05-07T14:42:55.777Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / mandrillapp-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/messages/send.json'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "async": "async",
    "ip_pool": "ip_pool",
    "key": "key",
    "attachments": "attachments",
    "auto_html": "auto_html",
    "auto_text": "auto_text",
    "bcc_address": "bcc_address",
    "from_email": "from_email",
    "from_name": "from_name",
    "global_merge_vars": "global_merge_vars",
    "google_analytics_campaign": "google_analytics_campaign",
    "google_analytics_domains": "google_analytics_domains",
    "Reply_To": "Reply-To",
    "headers": "headers",
    "html": "html",
    "images": "images",
    "important": "important",
    "inline_css": "inline_css",
    "merge": "merge",
    "merge_vars": "merge_vars",
    "website": "website",
    "metadata": "metadata",
    "preserve_recipients": "preserve_recipients",
    "recipient_metadata": "recipient_metadata",
    "return_path_domain": "return_path_domain",
    "signing_domain": "signing_domain",
    "subaccount": "subaccount",
    "subject": "subject",
    "tags": "tags",
    "text": "text",
    "to": "to",
    "track_clicks": "track_clicks",
    "track_opens": "track_opens",
    "tracking_domain": "tracking_domain",
    "url_strip_qs": "url_strip_qs",
    "view_content_link": "view_content_link",
    "message": "message",
    "send_at": "send_at",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/messages/send.json',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}