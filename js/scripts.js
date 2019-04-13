$(document).ready(function(){
  $("#goal-button").click(function() {
      $("#dongs").append("<li class='slappy'>" + $("#newdunk").val() + "</li>");
      $("#newdunk").val("");
})
