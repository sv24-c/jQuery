/**
 * Created by smit on 18/2/22.
 */
var Cssclasses = {

    cssclasses: function () {
      /*  $("button").click(function(){
            $("h1").addClass("page-header");
            $("p.hint").addClass("highlight");
        });*/

       /*$("button").click(function(){
        $("h1").addClass("page-header highlight");
    });*/

        /*$("button").click(function(){
            $("h1").removeClass("page-header");
            $("p").removeClass("hint highlight");
        });*/

        $("p").click(function(){
            $(this).toggleClass("highlight");
        });
    }
};