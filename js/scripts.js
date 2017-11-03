//BIZ
function Pizza(size, topping, cost) {
  this.size = size;
  this.topping = topping;
  this.cost = 0;
};

Pizza.prototype.pizzaSizeTotal = function() {
  var sizeOrder = this.size;
} if (this.size === "Large 18'") {
  this.cost === 18;
} else if (this.size === "Medium 16'") {
  this.cost === 16;
} else if (this.size === "Small 12'") {
  this.cost === 12;
} return sizeOrder;

Pizza.prototype.pizzaToppingTotal = function () {
  var toppingOrder = this.topping;
} if (this.topping === "Pepperoni") {
  this.cost += 3;
} else if (this.topping === "Artichoke") {
  this.cost += 3;
} else if (this.topping === "Mushrooms") {
  this.cost += 1;
} return toppingOrder;

pizza.prototype.orderTotal = function () {
  var finalOrder = this.size + this.topping + this.cost;
  return finalOrder;
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
    var pizzaSize = $("select#size-select").val();
    var pizzaTop = $("select#topping-select").val();

    var order = newPizza.pizzaTotal();

    $(".reciept").show();

  });
});
