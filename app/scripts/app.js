'use strict';

/**
 * @ngdoc overview
 * @name landingPageApp
 * @description
 * # landingPageApp
 *
 * Main module of the application.
 */
angular
  .module('landingPageApp', [
    'ngResource',
		'ngMockE2E'
  ])
	.run(function($httpBackend) {
		var cv_detales = [{when:'08.2015-presen', name:'Project “e-kolektor”'},
											{when:'08.2015-10.2015', name:'Neura'},
											{when:'04.2015-06.2015', name:'Obergudt Start-up'},
											{when:'02.2015-10.2015', name:'GastroHunterEU Start-up'},
											{when:'07.2013-11.2014', name:'Recoded'},
											{when:'05.2009-08.2013', name:'Poznan Supercomputing and Networking Cente'}];
	
		$httpBackend.whenGET('/cv').respond(function(method,url,data) {
			return [200, cv_detales, {}];
		});
});
