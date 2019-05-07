# ![LOGO](logo.png) Mandrill **flow**ground Connector

## Description

A generated **flow**ground connector for the Mandrill API (version 1.0).

Generated from: https://api.apis.guru/v2/specs/mandrillapp.com/1.0/swagger.json<br/>
Generated at: 2019-05-07T17:42:55+03:00

## API Description

Mandrill is a reliable, scalable, and secure delivery API for transactional emails from websites and applications. It's ideal for sending data-driven transactional emails, including targeted e-commerce and personalized one-to-one messages.


## Authorization

This API does not require authorization.

## Actions

### Begins an export of your activity history. The activity will be exported to a zip archive containing a single file named activity.csv in the same format as you would be able to export from your account's activity view. It includes the following fields: Date, Email Address, Sender, Subject, Status, Tags, Opens, Clicks, Bounce Detail. If you have configured any custom metadata fields, they will be included in the exported data.

### Returns information about an export job. If the export job's state is 'complete', the returned data will include a URL you can use to fetch the results. Every export job produces a zip archive, but the format of the archive is distinct for each job type. The api calls that initiate exports include more details about the output format for that job type.

### Returns a list of your exports.

### Begins an export of your rejection blacklist. The blacklist will be exported to a zip archive containing a single file named rejects.csv that includes the following fields: email, reason, detail, created_at, expires_at, last_event_at, expires_at.

### Begins an export of your rejection whitelist. The whitelist will be exported to a zip archive containing a single file named whitelist.csv that includes the following fields: email, detail, created_at.

### Add an inbound domain to your account

### Add a new mailbox route to an inbound domain

### Check the MX settings for an inbound domain. The domain must have already been added with the add-domain call

### Delete an inbound domain from the account. All mail will stop routing for this domain immediately.

### Delete an existing inbound mailbox route

### List the domains that have been configured for inbound delivery

### List the mailbox routes defined for an inbound domain

### Take a raw MIME document destined for a domain with inbound domains set up, and send it to the inbound hook exactly as if it had been sent over SMTP

### Update the pattern or webhook of an existing inbound mailbox route. If null is provided for any fields, the values will remain unchanged.

### Cancels the warmup process for a dedicated IP.

### Tests whether a domain name is valid for use as the custom reverse DNS for a dedicated IP.

### Creates a pool and returns it. If a pool already exists with this name, no action will be performed.

### Deletes a pool. A pool must be empty before you can delete it, and you cannot delete your default pool.

### Deletes a dedicated IP. This is permanent and cannot be undone.

### Retrieves information about a single dedicated ip.

### Lists your dedicated IP pools.

### Lists your dedicated IPs.

### Describes a single dedicated IP pool.

### Requests an additional dedicated IP for your account. Accounts may have one outstanding request at any time, and provisioning requests are processed within 24 hours.

### Configures the custom DNS name for a dedicated IP.

### Moves a dedicated IP to a different pool.

### Begins the warmup process for a dedicated IP. During the warmup process, Mandrill will gradually increase the percentage of your mail that is sent over the warming-up IP, over a period of roughly 30 days. The rest of your mail will be sent over shared IPs or other dedicated IPs in the same pool.

### Cancels a scheduled email.

### Get the full content of a recently sent message

### Get the information for a single recently sent message

### Queries your scheduled emails by sender or recipient, or both.

### Parse the full MIME document for an email message, returning the content of the message broken into its constituent pieces

### Reschedules a scheduled email.

### Search the content of recently sent messages and return the aggregated hourly stats for matching messages

### Search the content of recently sent messages and optionally narrow by date range, tags and senders. This method may be called up to 20 times per minute. If you need the data more often, you can use /messages/info.json to get the information for a single message, or webhooks to push activity to your own application for querying.

### Take a raw MIME document for a message, and send it exactly as if it were sent through Mandrill's SMTP servers

### Send a new transactional message through Mandrill using a template

### Send a new transactional message through Mandrill

### Add a new custom metadata field to be indexed for the account.

### Delete an existing custom metadata field. Deletion isn't instataneous, and /metadata/list will continue to return the field until the asynchronous deletion process is complete.

### Get the list of custom metadata fields indexed for the account.

### Update an existing custom metadata field.

### Adds an email to your email rejection blacklist. Addresses that you add manually will never expire and there is no reputation penalty for removing them from your blacklist. Attempting to blacklist an address that has been whitelisted will have no effect.

### Deletes an email rejection. There is no limit to how many rejections you can remove from your blacklist, but keep in mind that each deletion has an affect on your reputation.

### Retrieves your email rejection blacklist. You can provide an email address to limit the results. Returns up to 1000 results. By default, entries that have expired are excluded from the results; set include_expired to true to include them.

### Adds a sender domain to your account. Sender domains are added automatically as you send, but you can use this call to add them ahead of time.

### Checks the SPF and DKIM settings for a domain. If you haven't already added this domain to your account, it will be added automatically.

### Returns the sender domains that have been added to this account.

### Return more detailed information about a single sender, including aggregates of recent stats

### Return the senders that have tried to use this account.

### Return the recent history (hourly stats for the last 30 days) for a sender

### Sends a verification email in order to verify ownership of a domain. Domain verification is an optional step to confirm ownership of a domain. Once a domain has been verified in a Mandrill account, other accounts may not have their messages signed by that domain unless they also verify the domain. This prevents other Mandrill accounts from sending mail signed by your domain.

### Add a new subaccount

### Delete an existing subaccount. Any email related to the subaccount will be saved, but stats will be removed and any future sending calls to this subaccount will fail.

### Given the ID of an existing subaccount, return the data about it

### Get the list of subaccounts defined for the account, optionally filtered by a prefix

### Pause a subaccount's sending. Any future emails delivered to this subaccount will be queued for a maximum of 3 days until the subaccount is resumed.

### Resume a paused subaccount's sending

### Update an existing subaccount

### Return the recent history (hourly stats for the last 30 days) for all tags

### Deletes a tag permanently. Deleting a tag removes the tag from any messages that have been sent, and also deletes the tag's stats. There is no way to undo this operation, so use it carefully.

### Return more detailed information about a single tag, including aggregates of recent stats

### Return all of the user-defined tag information

### Return the recent history (hourly stats for the last 30 days) for a tag

### Add a new template

### Delete a template

### Get the information for an existing template

### Return a list of all the templates available to this user

### Publish the content for the template. Any new messages sent using this template will start using the content that was previously in draft.

### Inject content and optionally merge fields into a template, returning the HTML that results

### Return the recent history (hourly stats for the last 30 days) for a template

### Update the code for an existing template. If null is provided for any fields, the values will remain unchanged.

### Add a tracking domain to your account

### Checks the CNAME settings for a tracking domain. The domain must have been added already with the add-tracking-domain call

### Get the 100 most clicked URLs

### Return the 100 most clicked URLs that match the search query given

### Return the recent history (hourly stats for the last 30 days) for a url

### Get the list of tracking domains set up for this account

### Return the information about the API-connected user

### Validate an API key and respond to a ping

### Validate an API key and respond to a ping (anal JSON parser version)

### Return the senders that have tried to use this account, both verified and unverified

### Add a new webhook

### Delete an existing webhook

### Given the ID of an existing webhook, return the data about it

### Get the list of all webhooks defined on the account

### Update an existing webhook

### Adds an email to your email rejection whitelist. If the address is currently on your blacklist, that blacklist entry will be removed automatically.

### Removes an email address from the whitelist.

### Retrieves your email rejection whitelist. You can provide an email address or search prefix to limit the results. Returns up to 1000 results.

## License

**flow**ground :- Telekom iPaaS / mandrillapp-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
