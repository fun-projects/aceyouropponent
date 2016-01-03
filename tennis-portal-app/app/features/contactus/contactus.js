(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.contactus', [
        'ngMap'])
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