const messages = require('osa-imessage')

module.exports = function(app) {

  app.get('/', function(req, res) {
    console.log('sending')

    messages.send('Let me know if you receive this... it\'s a test :) x', process.env.NUMBER1, function() {
      console.log('sent')
      res.render('pages/home', {
        title: process.env.APP_NAME
      })
    })

  })

}
