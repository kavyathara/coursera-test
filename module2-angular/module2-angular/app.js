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
	name:"Milk",
	quantity:" 2 bottle "
},
{
	name:"Banana",
	quantity:"2 Kg "
},
{
	name:"chicken",
	quantity:" 1 kg"
},
{
	name:"Egg",
	quantity:" 12 pec "
},
{
	name:"Cookies",
	quantity:" 12 packet "
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
