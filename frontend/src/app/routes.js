var ng = require('@angular/core');
var ngRouter = require('@angular/router');
var MainComponent = require('./main');

var RootComponent =
  ng.Component({
    selector: 'fountain-root',
    template: '<router-outlet></router-outlet>'
  })
  .Class({
    constructor: function () {}
  });

var routes = [
  {
    path: '',
    component: MainComponent
  }
];

module.exports = {RootComponent: RootComponent, routes: routes, routing: ngRouter.RouterModule.forRoot(routes)};
