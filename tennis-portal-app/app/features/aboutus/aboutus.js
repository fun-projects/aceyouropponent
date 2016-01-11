(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.aboutus', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('aboutusPage', {
                url: '/aboutus',
                templateUrl: 'features/aboutus/aboutus.html',
                controller: 'AboutUsController',
                controllerAs: 'aboutusVm'
            });
    }
}(angular));