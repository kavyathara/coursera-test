(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject=['$scope']
	function LunchCheckController($scope){
		$scope.enterMenu='';
		$scope.showMessage='';
		$scope.showMenu=function (){
			var arr=[];
			var menuItem=$scope.enterMenu;
			if(menuItem.length==0){
				$scope.showMessage="Please enter data first";
			}else{
				 arr=menuItem.split(",");
			 var itemLength=arr.length;
			 if(itemLength<4){
			$scope.showMessage="Enjoy!";
			 }else{
				 $scope.showMessage="Too much!";
			 }

			}

		}
	};


})();
