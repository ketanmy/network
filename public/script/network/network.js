var networkCtrl = require('./network-ctrl');

angular.module('network-crud', [])
    .controller('networkCtrl', () => new networkCtrl());