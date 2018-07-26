(function () {
    'use strict';
    angular
        .module('myApp.auth')
        .factory('Users', function ($firebaseArray, $firebaseObject) {
            var usersRef = firebase.database().ref('users');
            var users = {
                getProfile: function (uid) {
                    return $firebaseObject(usersRef.child(uid));
                },
                getDisplayName: function (uid) {
                    return users.$getRecord(uid).getDisplayName
                },
                getGravatar: function (uid) {
                    return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
                },
                all: users
            };

            return users;
        })

})();