(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.gallery', [
        ])
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('galleryPage', {
                url: '/gallery',
                templateUrl: 'features/gallery/gallery.html',
                controller: 'GalleryController',
                controllerAs: 'galleryVm'
            });
    }
}(angular));