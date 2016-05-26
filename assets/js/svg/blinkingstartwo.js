var animationSpeedS2 = 700;

function blinkingStars2(one, two) {
  $('#star4').animate({
    svgOpacity: two
  }, {easing: 'linear',
     duration: animationSpeedS2
     })
  $('#star3').animate({
    svgOpacity: one
  }, {
    easing: 'linear',
    duration: animationSpeedS2,
    complete: function() {
      var tempTwo = one;
      one = two;
      two = tempTwo;
      blinkingStars2(one, two);
    }
  });
};


blinkingStars2(1.0, 0.0);
