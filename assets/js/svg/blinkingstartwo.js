var animationSpeed = 500;

function blinkingStars(one, two) {
  $('#star2').animate({
    svgOpacity: two
  }, {easing: 'linear',
     duration: animationSpeed
     })
  $('#star1').animate({
    svgOpacity: one
  }, {
    easing: 'linear',
    duration: animationSpeed,
    complete: function() {
      var tempTwo = one;
      one = two;
      two = tempTwo;
      blinkingStars(one, two);
    }
  });
};


blinkingStars(1.0, 0.0);
