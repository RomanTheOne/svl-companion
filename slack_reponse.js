function jira_ticket(params) {
  return {
    "text": '',
    "attachments": [
      {
        "title": 'test Title',
        "title_link": 'test title link',
        "color": "#36a64f",

        "fields": [
          {
            "title": "Condition",
            "value": 'some id',
            "short": "false"
          },
          {
            "title": "Wind",
            "value": 'some speed',
            "short": "true"
          },
          {
            "title": "Atmosphere",
            "value": "test Humidity",
            "short": "true"
          }
        ],

        "thumb_url": "https://turbo.network/hqroom/image/upload/c_limit,f_auto,h_10000,w_1600/v1490474411/post/4f7b5881af432fd63dcaadda/5e9850d5bbfa7b2cHofOYyBhcdSvruFG.jpg"
      }
    ]
  }
}

module.exports = jira_ticket;
