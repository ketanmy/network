// dependencies
var angular     = require('angular');
    uiRouter    = require('angular-ui-router'); 
    routes      = require('./routes/routes');

require('./network/network');


var app = angular.module('networkApp',[
    'ui.router',
    'network-crud'
]);

app.config(routes);