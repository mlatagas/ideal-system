(function () {
    'use strict'
    angular
        .module('myApp.auth')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routeConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/registration');
        $stateProvider.state('registration', {
            url: "/registration",
            controller: "authController",
            controllerAs: "vm",
            templateUrl: "js/auth/auth-registration.html"
            // resolve: {
            //     requireNoAuth: function ($state, auth) {
            //         console.log(auth);
            //         return auth.$requireSignIn().then(function (auth) {

            //             $state.go('home');
            //         }, function (error) {
            //             return;
            //         })
            //     }
            // }

        }).state('login', {
            url: "/login",
            controller: "authController",
            controllerAs: "vm",
            templateUrl: "js/auth/auth-login.html",
            // resolve:{
            //     requireNoAuth: function($state, Auth){
            //         return Auth.$requireSignIn().then(function(auth){
            //             $state.go('home');
            //         },function(error){
            //             return;
            //         })
            //     }
            // }

        }).state('profile', {
            url: "/profile",
            templateUrl: "js/auth/profile.html",
            controller: "authController",
            controllerAs: "vm",
            // resolve:{
            //     auth: function($state, Users, Auth){
            //         return Auth.$requireSignIn().catch(function(){
            //             $state.go('home');
            //         })
            //     },
            //     profile: function(Users, Auth){
            //         return Auth$requireSignIn().then(function(auth){
            //             return Users.getProfile(auth.uid).$loaded();
            //         })
            //     }
            // }

        });
    }
})();