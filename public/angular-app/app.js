(function(){
angular.module('ConferenceApp', ['ngRoute']).config(config);

function config($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'angular-app/conferences/main.html',
      controller: 'ConferencesCtrl',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
  };

})();
