(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal', [
            'ui.router',
            'ui.bootstrap',
            'fun.tennisportal.gallery',
            'fun.tennisportal.tennis',
            'fun.tennisportal.instructor',
            'fun.tennisportal.contactus',
            'fun.tennisportal.aboutus',

            // local dependencies
            'ngMap',
            //local services
            'fun.tennisportal.services'
        ])
        .config(moduleConfig);

    function moduleConfig ($urlRouterProvider, $stateProvider, $locationProvider) {
        $locationProvider.hashPrefix(); 
        $urlRouterProvider.otherwise('/tennis');
        $stateProvider
            .state('fun.tennisportal', {
                url: '',
                templateUrl: 'index.html',
                abstract: true
            });
    }
}(angular));
