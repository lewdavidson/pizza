//BIZ
function Pizza(size, type, toppingsArray, price) {
  this.size = size;
  this.type = type;
  this.toppings = toppingsArray;
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

Pizza.prototype.type = function() {
  if (this.type === "Pepperoni") {
    return this.price + 3;
  } else {
    return this.price;
  }
};



//UI
$(document).ready(function() {
  $("form.pizza-form").submit(function(event) {
    event.preventDefault();

    var newPizza = new Pizza();
    var pizzaSize = $("select#size-select").val();
    newPizza.sizeCalc();
    var pizzaType = $("select#type-select").val();
    var toppingsArray = [];
    var extraTops = $("input:checkbox[name=topping]:checked").each(function() {
      toppingsArray.push($(this).val());
      if (toppingsArray <= 1) {
      for (var index = 0; index <= toppingsArray.length; index++) {
        var toppingsPrice = toppingsArray.length[i];
        newPizza.price += toppingsPrice;
      }
    }
  });
    $("#cost").text(newPizza.price);
    $("#built-pizza").text(pizzaSize + ", " + pizzaType + " " + "Pizza");
    // $(".reciept").show();
  });
});

// pizzaSize, pizzaType, toppingsArray
