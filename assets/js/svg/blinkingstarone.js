var animationSpeed = 500;

function blinkingStars1(one, two) {
  $('#star1, #star2').animate({
    svgOpacity: one
  }, {
    easing: 'linear',
    duration: animationSpeed,
    complete: function() {
      var tempTwo = one;
      one = two;
      two = tempTwo;
      blinkingStars1(one, two);
    }
  });
};


blinkingStars1(1.0, 0.0);
