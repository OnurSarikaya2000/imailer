require('dotenv').load()

const express = require('express')
const app = express()

app.set('port', process.env.NODE_PORT || 3000)

// views
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// static files (cache for 30 days in production)
app.use('/assets', express.static(__dirname + '/assets'))

// routes
require('./routes')(app)

app.listen(app.get('port'), function (error) {
  if (error) console.error(error)

  else {
    console.log(`${process.env.APP_NAME} has started on port ${app.get('port')}`)
  }
})
