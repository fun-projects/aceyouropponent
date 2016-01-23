(function (angular) {
    'use strict';
    angular.module('fun.tennisportal.services')
        .service('tennisPortalContactUsService', tennisPortalContactUsService);

    function tennisPortalContactUsService($http, $log) {
        var vm = this;
        vm.createContact = createContact;

        /**
         * Create User Contact
         * @param part
         * @returns {*}
         */
        function createContact(user) {
            return $http.post('/register', user)
                .success(function (result) {
                    $log.debug("User Successfully Created")
                    return result.data;
                })
                .error(function (err) {
                    $log.error('Part is not created');
                    $log.error(user);
                    $log.error(err.data);
                });
        }
    }
}(angular));
