angular.module('ConferenceApp').directive('modal', modalConference);

function modalConference(){
  return {
    templateUrl: 'angular-app/conferences/modalConference.html',
    restrict: 'E',
     transclude: true,
     replace:true,
     scope:true,
     link: function postLink($scope, element, attrs) {
       $scope.$watch(attrs.visible, function(value){
         if(value == true)
           $(element).modal('show');
         else
           $(element).modal('hide');
       });

       $(element).on('shown.bs.modal', function(){
         $scope.$apply(function(){
           $scope.$parent[attrs.visible] = true;
         });
       });

       $(element).on('hidden.bs.modal', function(){
         $scope.$apply(function(){
           $scope.$parent[attrs.visible] = false;
         });
       });
     }
  }
}
