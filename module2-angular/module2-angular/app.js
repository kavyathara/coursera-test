(function (){
'use strict';
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService){
	var buyController=this;
	buyController.items=ShoppingListCheckOffService.getItem();
	buyController.sendToBuyingList=function (itemIndex){
		ShoppingListCheckOffService.removeItem(itemIndex);
	};

}
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var bougtController=this;
	bougtController.bought=ShoppingListCheckOffService.getList();

}
function ShoppingListCheckOffService(){
	var service=this;
	var shoppingList2=[
{
	name:"Pizza",
	quantity:" 1 Large "
},
{
	name:"Ranch",
	quantity:" 2 "
},
{
	name:"chicken",
	quantity:" Half size "
},
{
	name:"wings",
	quantity:" 12 piece "
},
{
	name:"Cookies",
	quantity:" 1 packet "
}
];
var msg="";
var items=[];
    service.getItem=function(){
		return shoppingList2;
	};
	service.removeItem=function(itemIndex){
		var itemList={
		   name:shoppingList2[itemIndex].name,
		   quantity:shoppingList2[itemIndex].quantity
	   };
	      items.push(itemList);
		shoppingList2.splice(itemIndex,1);
	};
	service.getList=function(){
		return items;
	};

}

})();
