(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.contactus', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('contactUs', {
                url: '/contactus',
                templateUrl: 'features/contactus/contactus.html',
                controller: 'ContactUsController',
                controllerAs: 'contactUsVm'
            });
    }
}(angular));