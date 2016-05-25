var animationSpeed = 500;

function blinkingStars() {
   $('#starBox2').animate({
        svgHeight: '50',
        svgWidth: '50',
        svgX: '25px',
        svgY: '25px',
        svgOpacity:'0.0'
      },{easing:'linear',
        duration:animationSpeed
        });
  $('#starBox').animate({
    svgHeight: '100',
    svgWidth:'100',
    svgOpacity:'1.0',
    svgX: '0px',
    svgY: '0px'
  }, {
    easing: 'linear',
    duration: animationSpeed,
    complete: function() {
      $('#starBox2').animate({
        svgHeight: '100',
        svgWidth: '100',
        svgOpacity:'1.0',
         svgX: '0px',
          svgY: '0px'
      },{easing:'linear',
        duration:animationSpeed
        });

      $('#starBox').animate({
        svgHeight: '50',
        svgWidth: '50',
        svgOpacity:'0.0',
         svgX: '25px',
          svgY: '25px'
      }, {
        easing: 'linear',
        duration: animationSpeed,
        complete: function() {
          blinkingStars();
        }
      })
    }
  })
}
//calling the resize function
blinkingStars();
