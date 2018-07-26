(function () {
    'use strict';
    angular
        .module('myApp.auth')
        .factory('Auth', function ($firebaseAuth) {
        var auth = $firebaseAuth();
        console.log(auth);
        return auth;
    })

})();