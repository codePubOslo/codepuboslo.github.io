var animationSpeedS1 = 250;

function blinkingStars1(one, two) {
  $('#star1, #star2').animate({
    svgOpacity: one
  }, {
    easing: 'linear',
    duration: animationSpeedS1,
    complete: function() {
      var tempTwo = one;
      one = two;
      two = tempTwo;
      blinkingStars1(one, two);
    }
  });
};


blinkingStars1(1.0, 0.0);
