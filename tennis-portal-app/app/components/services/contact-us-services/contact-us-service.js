(function (angular) {
    'use strict';
    angular.module('fun.tennisportal.services')
        .service('tennisPortalContactUsService', tennisPortalContactUsService);

    function tennisPortalContactUsService($http, $log, Notification) {
        var vm = this;
        vm.createContact = createContact;
        vm.getAllClassType = getAllClassType;
        vm.getAllInstructors = getAllInstructors;

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
                    Notification.error('Error occurred while saving. Please try again!');
                    $log.error(user);
                    $log.error(err.data);
                });
        }


        /**
         * Gets the All Class Type Data
         * @returns {HttpPromise}
         */
        function getAllClassType() {
            var url = '';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    $log.error(error);
                });
        }

        /**
         * Gets the All Instructors Data
         * @returns {HttpPromise}
         */
        function getAllInstructors() {
            var url = '/instructor';
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    $log.error(error);
                });
        }
    }
}(angular));
