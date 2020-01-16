$(document).ready(function() {
  $('form#info').submit(function(event) {
    var gender = $("select#gender").val();
    var personality = $("select#personality").val();
    var favColor = $("select#favColor").val();
    // console.log(gender + personality + favColor);


    if (gender === "female") {
      if ((personality ==="2" && favColor==="2") || (personality ==="4" && favColor==="2")) {
        $("#brad").show();
    } else {
      $("#duke").show();
      }
    }
    if (gender=== "male"){
      if(personality === "1" && favColor === "3"){
        $("#angelina").show();
      } else {
        $("#duchess").show();
      }
    }
  
  event.preventDefault();
  });
});