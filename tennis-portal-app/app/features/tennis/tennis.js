(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.tennis', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('tennisPage', {
                url: '/tennis',
                templateUrl: 'features/tennis/tennis.html',
                controller: 'TennisController',
                controllerAs: 'tennisVm'
            });
    }
}(angular));