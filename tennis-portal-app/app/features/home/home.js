(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.home', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('homePage', {
                url: '/home',
                templateUrl: 'features/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeVm'
            });
    }
}(angular));