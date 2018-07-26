(function () {
    'use strict'

    angular.module('myApp.auth')
        .controller('profileController', profileController);

    profileController.$inject = ['$state', 'md5', 'auth', 'profile'];
    function profileController($state, md5, auth, profile) {
        var vm = this;
        vm.profile = profile;

        vm.updateProfile = function(){
            vm.profile.emailHash = md5.createHash(auth.email);
            vm.profile.$save();
        }

    }
})();