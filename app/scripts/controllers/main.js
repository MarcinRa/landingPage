'use strict';

/**
 * @ngdoc function
 * @name landingPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageApp
 */
angular.module('landingPageApp')
  .controller('MainCtrl', function ($scope, $http) {
	$scope.pending = false;
	
	$scope.getCV = function(){
		$http.get('/cv').success(function(data) {
			$scope.pending = true;
			$scope.cv = data;
    }).error(function(){
			$scope.pending = false;
		});
	}
});
