//BIZ
function Pizza(size, topping, cost) {
  this.size = size;
  this.topping = topping;
  this.cost = cost;
};


var newPizza = new Pizza();




//UI
$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
  });
});
