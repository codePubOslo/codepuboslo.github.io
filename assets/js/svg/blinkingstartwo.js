var animationSpeed = 500;

function blinkingStars2(one, two) {
  $('#star4').animate({
    svgOpacity: two
  }, {easing: 'linear',
     duration: animationSpeed
     })
  $('#star3').animate({
    svgOpacity: one
  }, {
    easing: 'linear',
    duration: animationSpeed,
    complete: function() {
      var tempTwo = one;
      one = two;
      two = tempTwo;
      blinkingStars2(one, two);
    }
  });
};


blinkingStars2(1.0, 0.0);
