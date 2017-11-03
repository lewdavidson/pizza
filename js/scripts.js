//BIZ
function Pizza(size, topping, cost) {
  this.size = size;
  this.topping = topping;
};

Pizza.prototype.orderTotal = function() {
  if (this.size === "Large (18')" && this.topping === "Cheese (4 cheese blend)") {
   return "$18.00";
 } else if (this.size === "Large (18')" && this.topping === "Pepperoni") {
   return "$21.00";
 } else if (this.size === "Large (18')" && this.topping === "Artichokes") {
   return "$21.00"
 } else if (this.size === "Large (18')" && this.topping === "Mushrooms") {
   return "$19.00";
 } else if (this.size === "Medium (16'))" && this.topping === "Cheese (4 cheese blend)") {
   return "$16.00";
 } else if (this.size === "Medium (16'))" && this.topping === "Pepperoni") {
   return "$19.00";
 } else if (this.size === "Medium (16'))" && this.topping === "Artichokes") {
   return "$19.00";
 } else if (this.size === "Medium (16'))" && this.topping === "Mushrooms") {
   return "$17.00";
 } else if (this.size === "Small (12'))" && this.topping === "Cheese (4 cheese blend)") {
   return "$12.00";
 } else if (this.size === "Small (12'))" && this.topping === "Pepperoni") {
   return "$15.00";
 } else if (this.size === "Small (12'))'" && this.topping === "Artichokes") {
   return "$15.00";
 } else if (this.size === "Small (12'))" && this.topping === "Mushrooms") {
   return "$13.00";
 }
};

// Pizza.prototype.pizzaOrder = function() {
//   return this.size + this.topping;
// }






//UI
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("select#size-select").val();
    var pizzaTop = $("select#topping-select").val();
    var newPizza = new Pizza(pizzaSize, pizzaTop);
    var pizzaPrice = newPizza.orderTotal();
    // var pizzaOrder = newPizza.orderDetails();



    $("#cost").text(pizzaPrice);
    $("#built-pizza").text(pizzaSize + ", " + pizzaTop + " " + "Pizza");
    $(".reciept").show();

  });
});


//
// if (pizzaTop === "Pepperoni") {
//   var pizzaTopCost = 3;
// } else if (pizzaTop === "Artichokes") {
//   var pizzaTopCost = 3;
// } else if (pizzaTop === "Mushrooms") {
//   var pizzaTopCost = 1;
// } else {
//   var pizzaTopCost = 0;
// }
