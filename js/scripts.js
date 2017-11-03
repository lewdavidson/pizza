//BIZ
function Pizza(size, type, toppingsArray, price) {
  this.size = size;
  this.type = type;
  this.toppings = toppingsArray;
  this.price = 0;
};

Pizza.prototype.size = function() {
  if (this.size === "Large (18')") {
    return this.price = 18;
  } else if (this.size === "Medium (16')") {
    return this.price = 16;
  } else {
    return this.price = 12;
  }
};

Pizza.prototype.type = function() {
  if (this.type === "Pepperoni") {
    return this.price + 3;
  } else {
    return this.price;
  }
};

for (var index = 0; index <= toppingsArray.length; index++) {
  var toppingsPrice = toppingsArray.length[i];
  return this.price += toppingsPrice;
}


//UI
$(document).ready(function(){
  $("form#pizza-form").submit(function(event) {
    event.preventDefault();
    var pizzaSize = $("select#size-select").val();
    var pizzaType = $("select#type-select").val();
    var newPizza = new Pizza(pizzaSize, pizzaType, extraTops, pizzaPrice);
    var extraTops = $("input:checkbox[value=topping]:checked").each(function(){
      toppingsArray.push($(this)).val();
    });
    var toppingsArray = [];


    $("#cost").text(pizza.price);
    $("#built-pizza").text(pizzaSize + ", " + pizzaType + " " + "Pizza");
    $(".reciept").show();

  });
});
