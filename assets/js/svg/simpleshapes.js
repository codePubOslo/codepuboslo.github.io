(function(){//variable used in animations setting the speed of the animation
var animationSpeed = 2000;

//task 1 switching between circle and square
function makeCircle() {
  //setting x and y radius. If 0 it makes a square, if half of width/height it makes a circle

  $('#rectangle1').animate({
    svgRx: '75',
    svgRy: '75'
  }, {
    easing: 'linear',
    duration: animationSpeed,
    complete: function() {
      $('#rectangle1').animate({
      svgRx: '0',
      svgRy: '0'
  }, {easing: 'linear',
     duration:animationSpeed,
     complete: function(){
       makeCircle();
     }})
    }});
};
//calling the animation function
makeCircle();


//Task 2 rotate blue rectangle
//variables for rotating
var deg = 0;
var increasing = true;

//function for rotating blue rectangle
function rotateRect() {
  if (deg > 355) {
    increasing = false;
  }
  if (deg < 5) {
    increasing = true;
  }
  if (increasing) {
    deg = deg + 3;
  } else {
    deg = deg - 3;
  }
  $('#rectangle2').animate({
    svgTransform: 'rotate(' + deg + ', 100, 100)'
  }, {
    easing: 'linear',
    duration: 3,
    complete: function() {
      rotateRect();
    }
  });
}
//calling the rotate function
rotateRect();


//Task 3 resizing square
function resizeRect() {
  $('#rectangle3').animate({
    svgWidth: '150px',
    svgHeight: '150px',
    svgX: '25px',
    svgY: '25px'
  }, {
    easing: 'linear',
    duration: animationSpeed,
    complete: function() {
      $('#rectangle3').animate({
        svgWidth: '100px',
        svgHeight: '100px',
        svgX: '50px',
        svgY: '50px'
      }, {
        easing: 'linear',
        duration: animationSpeed,
        complete: function() {
          resizeRect();
        }
      })
    }
  })
}
//calling the resize function
resizeRect();


//task 4 sliding square back and forth
function slideRect() {
  $('#rectangle4').animate({
    svgTransform: 'translate(200, 0)'
  }, {
    easing: 'linear',
    duration: animationSpeed,
    complete: function() {
      $('#rectangle4').animate({
        svgTransform: 'translate(0,0)'
      }, {
        easing: 'linear',
        duration: animationSpeed,
        complete: function() {
          slideRect();
        }
      })
    }
  });
}
//calling the slideRectangle function
slideRect();})();
