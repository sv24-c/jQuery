/**
 * Created by smit on 15/2/22.
 */
var slideupdown = {

    updown : function () {

        $(".up-btn").click(function () {

            //$("p").slideUp();

            $("p.normal").slideUp();
            $("p.fast").slideUp("fast");
            $("p.slow").slideUp("slow");
            $("p.very-fast").slideUp(50);
            $("p.very-slow").slideUp(2000);
        });

        $(".down-btn").click(function () {

            //$("p").slideDown();

            $("p.normal").slideDown();
            $("p.fast").slideDown("fast");
            $("p.slow").slideDown("slow");
            $("p.very-fast").slideDown(50);
            $("p.very-slow").slideDown(2000);
        });

         $(".toggle").click(function () {
           // $("p").fadeToggle();
            $("p.normal").slideToggle();
            $("p.fast").slideToggle("fast");
            $("p.slow").slideToggle("slow");
            $("p.very-fast").slideToggle(50);
            $("p.very-slow").slideToggle(2000);
        });
    }
}