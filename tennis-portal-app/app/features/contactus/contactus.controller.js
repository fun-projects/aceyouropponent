(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.contactus')
        .controller('ContactUsController', ContactUsController);

    function ContactUsController(tennisPortalContactUsService, $log, Notification) {
        var vm = this;
        vm.classTypes = [];
        vm.instructors = [];
        vm.init = init();

        function init(){

            tennisPortalContactUsService.getAllClassType().then(function (classType) {
                _.forEach(classType, function (value) {
                    vm.classTypes.push({'type': value.className});
                });
            });

            tennisPortalContactUsService.getAllInstructors().then(function (instructor) {
                _.forEach(instructor, function (value) {
                    vm.instructors.push({'name': value.instructorName});
                });
            });

        }

        /**
         * Calls the add contact service on click of submit button
         * @param contact
         */
        vm.submitContactUs = function () {
            tennisPortalContactUsService.createContact(vm.user).success(function (result) {
                $log.info(result);
                Notification.success('User Successfully created');
            });
        };
    }
}(angular));