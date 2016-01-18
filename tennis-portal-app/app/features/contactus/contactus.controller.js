(function (angular) {
    'use strict';

    angular
        .module('fun.tennisportal.contactus')
        .controller('ContactUsController', ContactUsController);

    function ContactUsController(tennisPortalContactUsService) {
        var vm = this;


        /**
         * Calls the add contact service on click of submit button
         * @param contact
         */
        vm.submitContactUs = function () {
            tennisPortalContactUsService.createContact(vm.user).success(function (result) {
                $log.info(result);
            });
        };
    }
}(angular));