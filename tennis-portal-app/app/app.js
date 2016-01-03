(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal', [
            'ui.router',
            'ui.bootstrap',
            'fun.tennisportal.home',
            'fun.tennisportal.tennis',
            'fun.tennisportal.contactus',
            'fun.tennisportal.personalTraining',

            // local dependencies
            'ngMap'
        ])
        .config(moduleConfig);

    function moduleConfig ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.hashPrefix(); 
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('fun.tennisportal', {
                url: '',
                templateUrl: 'index.html',
                abstract: true
            });
    }
}(angular));
