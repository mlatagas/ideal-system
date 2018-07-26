(function(){
    'use strict'

    angular.module('myApp.auth')
           .controller('authController', authController);

           authController.$inject = ['$state'];
           function authController($state){
               var vm = this;
               vm.user = {
                email: '',
                password: ''
              };


              vm.register = function(){
                vm.$createUserWithEmailAndPassword(vm.user.email, vm.user.password).then(function(user){
                  $state.go('home');
                },function(error){
                  vm.error = error;
                });
              }
              // vm.login = function () {
              //   Auth.$signInWithEmailAndPassword(vm.user.email, vm.user.password).then(function (auth) {
              //     $state.go('home');
              //   }, function (error) {
              //     vm.error = error;
              //   });
              // };
          
          
              console.log(vm.register);

           }
})();