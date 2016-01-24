(function (angular) {
    'use strict';

    angular.module('fun.tennisportal.instructordirective')
        .directive('instructor', instructor);
    function instructor() {
        return {
            restrict: 'E',
            scope: {},
            link: function(scope, element, attrs) {
                scope.username = attrs.username;
                scope.description= attrs.description;
                scope.avatar = attrs.avatar;
                scope.setMaster = function(section) {
                    scope.selected = section;
                }

                scope.isSelected = function(section) {
                    return scope.selected === section;
                }
                scope.bookMe = function() {
                    console.log("successfully booked" +scope.username);
                }
            },
            template: '<div class="row">' +
            '<div class="col-xs-3" style="text-align: center"><img style="width: 60%; height: 100px" src="{{avatar}}"><br/>{{username}}</div>' +
            '<div class="col-xs-7">{{description}}</div>' +
            '<div class="col-xs-2"><button type="button" class="btn btn-primary" ng-click="bookMe()">Book Now</button></div>' +
            '</div>'
        };
    }
}(angular));
