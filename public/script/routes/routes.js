var routes = function($httpProvider, $stateProvider){

	//$stateProvider.otherwise('/not found');
	$stateProvider.state('default', {
		name : 'default',
		url: '/',		
	}).state('network', {
		name : 'network',
		url: '/network',
		controller: 'networkCtrl as network',
		templateUrl: '/script/network/network.html' 
	});
}

module.exports = routes;