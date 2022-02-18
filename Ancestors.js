/**
 * Created by smit on 18/2/22.
 */
var Ancestors = {

    ancestors: function () {

        //$("li").parent().addClass("highlight");

        //$("ul").parents().addClass("frame");
        //$("li").parents().addClass("frame");

        //$("li").parents("div").addClass("frame");

        //$("li").parentsUntil("html").addClass("frame");

        //$("ul").children().addClass("highlight");

        //$("div").find("li").addClass("frame");

        //$("div").find("*").addClass("frame");

        //$("p").siblings().addClass("frame");

        //$("p").siblings("ul").addClass("highlight");

        //$("p").next().addClass("highlight");

        //$("p").nextAll().addClass("highlight");

        //$("h1").nextUntil("ul").addClass("highlight");

        //$("ul").prev().addClass("highlight");

        //$("ul").prevAll().addClass("highlight");

        $("ul").prevUntil("h1").addClass("highlight");

    }
};