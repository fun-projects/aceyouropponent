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

            //directives
            'fun.tennisportal.instructordirective',
            'fun.tennisportal.aboutusdirective',

            // local dependencies
            'ngMap',
            'ui-notification',
            //local services
            'fun.tennisportal.services'
        ])
        .config(moduleConfig);

    function moduleConfig ($urlRouterProvider, $stateProvider, $locationProvider,NotificationProvider) {
        $locationProvider.hashPrefix(); 
        $urlRouterProvider.otherwise('/tennis');
        $stateProvider
            .state('fun.tennisportal', {
                url: '',
                templateUrl: 'index.html',
                abstract: true
            });
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'left',
            positionY: 'bottom'
        });

    }
}(angular));
