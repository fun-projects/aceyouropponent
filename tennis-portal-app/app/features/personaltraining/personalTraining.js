(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.personalTraining', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('personalTrainingPage', {
                url: '/personalTraining',
                templateUrl: 'features/personaltraining/personalTraining.html',
                controller: 'PersonalTrainingController',
                controllerAs: 'ptVm'
            });
    }
}(angular));