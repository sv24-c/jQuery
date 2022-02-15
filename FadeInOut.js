/**
 * Created by smit on 15/2/22.
 */
var Fade = {

    fadeinout: function () {

        $(".in-btn").click(function () {

            $("p.normal").fadeOut();
            $("p.fast").fadeOut("fast");
            $("p.slow").fadeOut("slow");
            $("p.very-fast").fadeOut(50);
            $("p.very-slow").fadeOut(2000);
        });

        $(".out-btn").click(function () {

            $("p.normal").fadeIn();
            $("p.fast").fadeIn("fast");
            $("p.slow").fadeIn("slow");
            $("p.very-fast").fadeIn(50);
            $("p.very-slow").fadeIn(2000);
        });

        $(".toggle").click(function () {
           // $("p").fadeToggle();
            $("p.normal").fadeToggle();
            $("p.fast").fadeToggle("fast");
            $("p.slow").fadeToggle("slow");
            $("p.very-fast").fadeToggle(50);
            $("p.very-slow").fadeToggle(2000);
        });

         $(".fadeto").click(function () {
            $("p.normal").fadeToggle("fast",0);
            $("p.partial").fadeTo("slow",0.5);
            $("p.complete").fadeTo(2000,1)
            $("p.complete").fadeTo("fast", 0);

        });
    }
}