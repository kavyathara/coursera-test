(function(){
  'use strict';

  angular.module('DIApp',[])
  .controller('DIController',DIController);

 function DIController($scope,$filter){
   $scope.name="kavya";
   $scope.upper=function(){
     var upcase=$filter('uppercase');
     $scope.name=upcase($scope.name);
   };
 }
})();
