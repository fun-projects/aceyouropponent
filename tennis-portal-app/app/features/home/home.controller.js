(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.home')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;
        vm.myInterval = 3000;
        vm.noWrapSlides = false;
        vm.slides = [
            {
                image: 'http://lorempixel.com/400/200/'
    },
            {
                image: 'http://lorempixel.com/400/200/food'
    },
            {
                image: 'http://lorempixel.com/400/200/sports'
    },
            {
                image: 'http://lorempixel.com/400/200/people'
    }
  ];
    }
}(angular));