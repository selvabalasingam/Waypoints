$(document).ready(function(){
  var color = 'green';
  var waypoint = new Waypoint({
  element: document.querySelector('.three'),
  handler: function(direction) {
    var nav = document.querySelector('nav');
    var background = nav.style.background;
    if (direction === 'up') {
      if (background === 'green') {
        nav.style.background = 'orange';
      } else {
        nav.style.background = 'green';
      }
    }
  }
  });

  var imageWaypoint = new Waypoint({
  element: document.querySelector('.image'),
  handler: function(direction) {
    var nav = document.querySelector('nav');
    if (direction === 'down') {
      nav.style.background = 'red';
    }
  },
  offset: 'bottom-in-view'
});
});