angular.module('ecommerce').controller('produtosCtrl', function($scope, $http){
	//$scope.produtos = [];
	$http.get('/produtos').then(function(result){
		$scope.produtos = result.data;
	}, function(result){
		console.log(result);
	});
});