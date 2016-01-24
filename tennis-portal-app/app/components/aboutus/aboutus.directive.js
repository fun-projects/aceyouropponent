(function (angular) {
    'use strict';

    angular.module('fun.tennisportal.aboutusdirective')
        .directive('aboutUs', aboutUs);
    function aboutUs() {
        return {
            restrict: 'E',
            scope: {},
            link: function(scope, element, attrs) {
                scope.trainingname = attrs.trainingname;
                scope.description= attrs.description;
                scope.avatar = attrs.avatar;
            },
            template: '<div class="row">' +
            '<div class="col-xs-4" style="text-align: center"><img style="width: 70%; height: 130px" src="{{avatar}}"><br/>{{trainingname}}</div>' +
            '<div class="col-xs-8">{{description}}</div>' +
            '</div>'
        };
    }
}(angular));
