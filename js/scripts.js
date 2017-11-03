//BIZ
function Pizza(size, topping, cost) {
  this.size = size;
  this.topping = topping;
  this.cost = cost;
};

Pizza.prototype.pizzaTotal = function() {

}

var newPizza = new Pizza();
var lgPizza = 18;
var medPizza = 16;
var smPizza = 12;
var peppArt = 3;
var mushroom = 1;




//UI
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("option#size-select").val();
    var pizzaTop = $("option#topping-select").val(); 

  });
});
