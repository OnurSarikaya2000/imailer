var config = module.exports

config.app = {
  name: 'skeleton',
  port: process.env.EXPRESS_PORT || process.env.PORT || 3500
}

config.assets = {
  maxAge: 0
}
