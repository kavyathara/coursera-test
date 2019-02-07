(function (){

  'use strict';


  angular.module('myFirstApp',[])

.controller('myFirstController',function($scope){
  $scope.name="kavya";
  $scope.hey=function(){
    return name;
  };

});

})();
