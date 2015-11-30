$(document).ready(function(){

var waypoint = new Waypoint({
  element: document.getElementById('nav'),
  handler: function(direction) {

    if(direction === "down"){
    	$('#nav').addClass('navFixed');
    }

    else if(direction === "up"){
    	$('#nav').removeClass('navFixed');
    }
  },
  offset: 20
})
});