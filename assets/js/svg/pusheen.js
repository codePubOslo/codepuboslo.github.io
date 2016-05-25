var animationSpeed = 700;
var x = 150;
var dx = 150;
var round = 0;

//Run animation
pusheenDance();

function pusheenDance() {
  $(pusheen).animate({
    svgTransform: 'translate('+x+', -40)',
    svgOpacity: 0
  }, {
    duration: animationSpeed,
    complete: function() {
      setNewXValue();
      $(pusheen).animate({
        svgTransform: 'translate('+x+', 40)',
        svgOpacity: 1
      },{
        duration: animationSpeed,
        complete: function() {
          setNewXValue();
          pusheenDance();
        }
      });
    }
  });
};

// Helper function
function setNewXValue(){
  round = (round+1)%8;
  if (round < 4) {
    x += dx;
  }
  else {
     x -= dx;
  }
};
