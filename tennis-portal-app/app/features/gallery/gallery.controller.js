(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.gallery')
        .controller('GalleryController', GalleryController);

    function GalleryController() {
        var vm = this;
        vm.myInterval = 3000;
        vm.noWrapSlides = false;
        vm.slides = [
            {
                image: 'http://lorempixel.com/400/200/',
                active: true
    },
            {
                image: 'http://lorempixel.com/400/200/food',
                active: true
    },
            {
                image: 'http://lorempixel.com/400/200/sports',
                active: true
    },
            {
                image: 'http://lorempixel.com/400/200/people',
                active: true
    }
  ];
    }
}(angular));