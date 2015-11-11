module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('pages/home', {
      title: process.env.APP_NAME
    })
  })

}
