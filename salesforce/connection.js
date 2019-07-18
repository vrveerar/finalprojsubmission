const nforce = require('nforce');

/**
 * Creates connection to Salesforce CRM
 */

module.exports = nforce.createConnection({
  clientId: process.env.SF_CLIENT_ID,
  clientSecret: process.env.SF_CLIENT_SECRET,
  redirectUri: 'https://login.salesforce.com/services/oauth2/success',
  apiVersion: 'v43.0',
  mode: 'single',
  autoRefresh: true,
  username: process.env.SF_USERNAME,
  password: process.env.SF_PASSWORD,
  oauth: {
    access_token: process.env.SF_ACCESS_TOKEN,
    instance_url: process.env.SF_INSTANCE_URL
  },
});
