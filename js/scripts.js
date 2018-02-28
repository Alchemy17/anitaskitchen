$(document).ready(function() {
  //Opening the menu
  $("#open-menu").click(function() {
    $("aside").animate({"left": 0}, 1000);
  });
  //Closing the menu
$("#close-menu").click(function() {
  $("aside").animate({"left":"-110%"}, 1000);
  });
});
