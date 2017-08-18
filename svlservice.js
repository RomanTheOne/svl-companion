const express = require('express');
const parser = require('body-parser');
const util = require('util');

const client = require('./jira');

const jira_ticket = require('./slack_reponse');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

app.set('port', (process.env.PORT || 8080));

app.post('/webhook', function(request, response) {
  switch (request.body.result.action) {
    case 'jiraQueryItem':
      const { jira_project, jira_id } = request.body.result.parameters;

      console.log('jira ID: ', jira_project, jira_id);

      client.findIssue(`${jira_project}-${jira_id}`)
        .then(res => {
          console.log('res: ', JSON.stringify(res) );

          response.send({
            "speech": 'anything',
            "displayText": 'anything',
            "data": {"slack": jira_ticket(res)},
            "contextOut": [],
            "source": "apiai-weather-webhook-sample"
          })

        })
        .catch(err  => {
          console.error('error: ', err)
        });

      // response.send()
      break;

    default:
      break;
  }

  console.log('request: ', JSON.stringify(request.body));
});

app.listen(app.get('port'), function () {
  console.log('App listening at port', app.get('port'))
});