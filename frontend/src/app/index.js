var ng = require('@angular/core');
var ngPlatformBrowser = require('@angular/platform-browser');
var myRoutes = require('./routes');

// var TechsModule = require('./techs');

var MainComponent = require('./main');
var HeaderComponent = require('./header');
var TitleComponent = require('./title');
var FooterComponent = require('./footer');

module.exports = ng.NgModule({
  imports: [
    ngPlatformBrowser.BrowserModule,
    myRoutes.routing
  ],
  declarations: [
    myRoutes.RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent
  ],
  bootstrap: [myRoutes.RootComponent]
})
.Class({
  constructor: function () {}
});
