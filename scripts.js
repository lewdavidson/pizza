$(document).ready(function(){

  $("form#which-lang").submit(function(event) {
    var name = $("input#name").val();
    var end = $("select#frnt-or-bk").val();
    var strokes = $("select#strokes").val();
    var platform = $("select#platform").val();
    var device = $("select#device").val();
    var important = $("input:radio[name=important]:checked").val();


    if (end === "front" && strokes === "broad" || strokes === "narrow" && platform === "app"  || platform === "web" && device === "ios" && important === "looks") {
        $("#design").show();
        
    } else if (end === "back" && strokes === "broad" && platform === "web" || platform === "app" && device === "android" && important === "flex") {
        $("#java").show();
    } else if (end === "back" && strokes === "narrow" && platform === "web" && device === "ios" || device === "android" && important === "function") {
        $("#ruby").show();
    } else if (end === "back" || end === "front" && strokes === "broad" && platform === "web" || platform === "app" && device === "ios" || device === "android" && important === "flex" || important === "looks") {
        $("#either-or").show();
    } else {
     $("#conflict").show();
    }

    $(".your-name").text(name);
    event.preventDefault();
  });
});
