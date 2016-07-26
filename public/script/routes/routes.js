var routes = function($httpProvider, $stateProvider){

	$stateProvider.otherwise('/not found');
	$stateProvider.state('default', {
		name : 'default',
		url: '/',		
	});
}

export routes;