require('core-js/client/shim');
require('zone.js/dist/zone');

require('@angular/common');
require('rxjs');

require('./index.scss');

var ngCore = require('@angular/core');
var ngPbd = require('@angular/platform-browser-dynamic');
var AppModule = require('./app');

if (process.env.NODE_ENV === 'production') {
  ngCore.enableProdMode();
} else {
  Error['stackTraceLimit'] = Infinity; // eslint-disable-line dot-notation
  require('zone.js/dist/long-stack-trace-zone');
}

ngPbd.platformBrowserDynamic().bootstrapModule(AppModule);
