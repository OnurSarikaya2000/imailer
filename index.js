require('dotenv').load();

const express = require('express');
const app = express();
const messages = require('osa-imessage');

app.set('port', process.env.NODE_PORT || 3000);

app.listen(app.get('port'), (error) => {
  if (error) console.error(error);
  else {console.log(`${process.env.APP_NAME} has started on port ${app.get('port')}`)};
})

// app.get('/ping', (req, res) => {
    messages.send('hi', process.env.NUMBER, (e) => {
        console.log(e);
    });
// })
