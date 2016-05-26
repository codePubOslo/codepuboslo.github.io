(function(){var animationSpeedDB = 1000;

function doubleBounce1(){
  $('#circle1').animate({
    svgR: '50'
  },{duration:animationSpeedDB});
  $('#circle2').animate({
    svgR: '0'
  }, {duration:animationSpeedDB, complete: function(){
     $('#circle1').animate({
    svgR: '0'
  },{duration:animationSpeedDB});
    $('#circle2').animate({
   svgR: '50'
    }, {duration:animationSpeedDB, complete: function(){
      doubleBounce1();
    }})
  } })
}
doubleBounce1();
})()