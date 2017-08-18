const Jira = require('jira-client');

const config = {
  protocol: 'https',
  host: 'jira2.lgsvl.com',
  username: '****',
  password: '****',
  apiVersion: '2',
  strictSSL: true
};

const client = new Jira(config);

module.exports = client;
