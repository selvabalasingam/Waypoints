// NOTE: There is no styling for the color of the nagivation bar in CSS, it's done here instead.

$(document).ready(function(){
  var waypoint = new Waypoint({
  element: document.querySelector('.five'),
  handler: function(direction) {
    var nav = document.querySelector('nav');
    var background = nav.style.background;
    if (direction === 'down') {
        nav.style.background = 'green';
    }
    if (direction === 'up') {
      if (background === 'green') {
        nav.style.background = 'red'; 
      } 
    }
  }
  });

  // The code below loads the navigation bar as red from the get-go.
  var imageWaypoint = new Waypoint({
  element: document.querySelector('.five'),
  handler: function(direction) {
    var nav = document.querySelector('nav');
    if (direction === 'down') {
      nav.style.background = 'red'; 
    }
  },
  offset: 'bottom-in-view'
  }); 


});