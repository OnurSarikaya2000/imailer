var express = require('express')
var config = require('./config')
var app = express()

// views
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// static files (cache for 30 days in production)
app.use('/assets', express.static(__dirname + '/assets', {
  maxAge: config.assets.maxAge
}))

// routes
require('./routes')(app)

app.listen(config.app.port, config.app.ip, function (error) {
  if (error) console.error(error)

  else {
    var msg = config.app.name + ' started on http://'
    msg += config.app.ip + ':' + config.app.port
    console.log(msg)
  }
})
