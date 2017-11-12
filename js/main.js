$(document).ready(function () {
  function addSquare() {
      var gameWidth=parseInt($("#game").width());
      var placeInWidth=Math.floor(Math.random() * (gameWidth-10));
      var squareEL = $("<span id='squares'></span>");
      squareEL.css({
          top:0,
          left:placeInWidth+"px"
      });
      $("#game").prepend(squareEL);
      startFalling();
  }
  function startFalling() {
      var interval=setInterval(function () {
         var placeInHeight = parseInt($("#squares").css("top"));
          placeInHeight+=10;
          $("#squares").css("top",placeInHeight+"px");
          var gameHeight=parseInt($("#game").height());
          if(placeInHeight>=gameHeight)
          {
              $("#squares").remove();
              clearInterval( interval);
              addSquare();
          }
      },1000)
  }
  addSquare();
});
