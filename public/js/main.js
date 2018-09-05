//Fade in content when everything is loaded

$(document).ready(function() {
  //initial
  $("#content-1").delay(200).animate({
    "opacity" : "1",
  }, 500);
  $("#content-2").delay(500).animate({
    "opacity" : "1",
  }, 500);

});

 $("#forum-tab").click(function(){ //if the forum tab is clicked
  $("#forum-notice").animate({
    "opacity" : "1",
    "top" : "+=20px"}, 50);
  $("#forum-notice").delay(500).animate({
    "opacity" : "0",
    "top" : "+=20px"
  }, {easing:"swing"});
});