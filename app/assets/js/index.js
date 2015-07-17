import config from './config'
import {EventEmitter} from 'events'
import BrowserSize from 'browser-size'

class App extends EventEmitter {
  constructor() {
    super() // init
  }
}

let app = window.app = new App()

// app utilities
app.browser = new BrowserSize()

// ;[CONTROLLERS HERE].forEach(controller => controller(app))

console.info(`${config.name} App Started`)
