(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.instructor', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('instructorPage', {
                url: '/instructor',
                templateUrl: 'features/instructor/instructor.html',
                controller: 'InstructorController',
                controllerAs: 'instructorVm'
            });
    }
}(angular));