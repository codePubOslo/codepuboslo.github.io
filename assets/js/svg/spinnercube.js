var animationSpeed = 700;

function spinningCube(cubename, borderX, borderY, borderX2, borderY2) {
  $('#'+cubename+'').animate({
    svgWidth: '0px',
    svgHeight: '0px',
    svgX: ''+borderX+'px',
    svgY: ''+borderY+'px'
  },{easing:'linear', duration:animationSpeed, complete: function(){
    $('#'+cubename+'').animate({
      svgWidth: '15px',
      svgHeight: '15px',
      svgX: ''+borderX2+'px',
      svgY: ''+borderY2+'px'

    }, animationSpeed);
  }})
};

function runAnimation(){
  spinningCube("rectangle31", "22.5", "52.5", "15", "45" );
  setTimeout(function(){
    spinningCube("rectangle21", "22.5", "37.5", "15", "30");
    spinningCube("rectangle32", "37.5", "52.5", "30", "45");
  }, 100);
  setTimeout(function(){
    spinningCube("rectangle11", "22.5", "22.5", "15", "15");
  spinningCube("rectangle22", "37.5", "37.5", "30", "30" );
    spinningCube("rectangle33", "52.5", "52.5", "45", "45");
  }, 200);
  setTimeout(function(){
    spinningCube("rectangle12", "37.5", "22.5", "30","15");
    spinningCube("rectangle23", "52.5", "37.5", "45", "30" );
  }, 400);

  setTimeout(function(){
    spinningCube("rectangle13", "52.5", "22.5", "45", "15" );
  },500);
  setTimeout(function(){
    runAnimation();
  },1700);
}
runAnimation();
