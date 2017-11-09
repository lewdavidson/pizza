//BIZ
function Pizza(size, type, extraTops, price) {
  this.size = size;
  this.type = type;
  this.toppings = extraTops;
  this.price = 0;
};

Pizza.prototype.sizeCalc = function() {
  if (this.size === "Large (18')") {
    return this.price = 18;
  } else if (this.size === "Medium (16')") {
    return this.price = 16;
  } else {
    return this.price = 12;
  }
};

Pizza.prototype.typeCalc = function() {
  if (this.type = "Pepperoni") {
    return newPizza.price += 3;
  } else {
    return newPizza.price;
  }
};



//UI
var newPizza = new Pizza();
$(document).ready(function() {
  $("form.pizza-form").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("select#size-select").val();
    newPizza.sizeCalc();
    var pizzaType = $("select#type-select").val();
    newPizza.typeCalc();
    var toppingsArray = [];
    var extraTops = $("input:checkbox[name=topping]:checked").length;
       newPizza.price += extraTops;
      $("#cost").text(newPizza.price);
      $("#built-pizza").text(pizzaSize + ", " + pizzaType + " " + "Pizza");
      $(".reciept").show();

  });
});
