/**
 * Created by smit on 18/2/22.
 */
var Dimensions = {

    dimensions: function () {

        $("button").click(function () {
            /*var divWidth = $("#box").width();
            var divHeight = $("#box").height();

            $("#result").html("Width: "+divWidth+" Height: "+divHeight);*/

            /*$("#box").width(400).height(200); */

            /*var divWidth = $("#box").innerWidth();
            var divHeight = $("#box").innerHeight();

            $("#result").html("InnerWidth: "+divWidth+" InnerHeight: "+divHeight);*/

            /*$("#box").innerWidth(400).innerHeight(200);*/

           /* var divWidth = $("#box").outerWidth();
            var divHeight = $("#box").outerHeight();
            $("#result").html("Outer Width: " + divWidth + ", " + "Outer Height: " + divHeight);*/

            $("#box").outerWidth(400).outerHeight(300);

        });
    }
};