$(document).ready(function () {
    var placeInWidth;
    var interval;
    var successNum = 0, failuresNum = 0;
    var gameWidth = parseInt($("#game").width());

    function addSquare() {
        $("#squares").remove();
        clearInterval(interval);

        placeInWidth = Math.floor(Math.random() * (gameWidth - 10));
        var squareEL = $("<span id='squares'></span>");
        squareEL.css({
            top: 0,
            left: placeInWidth + "px"
        });
        $("#game").prepend(squareEL);
        startFalling();
    }


    function startFalling() {
        interval = setInterval(function () {
            var placeInHeight = parseInt($("#squares").css("top"));
            placeInHeight += 10;
            $("#squares").css("top", placeInHeight + "px");
            var gameHeight = parseInt($("#game").height());

            var racketValues = $("#racket").position();
            if (placeInHeight + 10 >= racketValues.top && placeInWidth+10 >= racketValues.left && placeInWidth <= racketValues.left + 50) {
                successNum++;
                $("#successNum").html(successNum);

                addSquare();
            }
            else if (placeInHeight >= gameHeight) {
                failuresNum++;
                $("#failuresNum").html(failuresNum);

                addSquare();
            }
        }, 100)
    }

    $("#Start").click(addSquare);
    $("#Stop").click(function () {
        $("#squares").remove();
        clearInterval(interval);
    });

    $("*").keydown(function( event ) {
        if ( event.which == 37)
        {
            event.preventDefault();
            goLeft();
        }
        else if(event.which == 39)
        {
            event.preventDefault();
            goRight();
        }
    });

    function goLeft() {
        var racketLeft = parseInt($("#racket").css("left"));
        if(racketLeft> 9)
        {
            racketLeft-=10;
            $("#racket").css("left", racketLeft + "px");
        }
        else if(racketLeft>0 && racketLeft<10)
        {
            racketLeft=0;
            $("#racket").css("left", racketLeft + "px");
        }
    }

    function goRight() {
        var racketLeft = parseInt($("#racket").css("left"));
        if(racketLeft+50 < gameWidth-9)
        {
            racketLeft+=10;
            $("#racket").css("left", racketLeft + "px");
        }
        else if(racketLeft+50 >gameWidth-10)
        {
            racketLeft=gameWidth-50;
            $("#racket").css("left", racketLeft + "px");
        }
    }
});
