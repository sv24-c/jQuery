/**
 * Created by smit on 15/2/22.
 */
var showhide = {

    show: function () {

        $(".hide-btn").click(function () {
            $("p.normal").hide();
            $("p.fast").hide("fast");
            $("p.slow").hide("slow");
            $("p.very-fast").hide(50);
            $("p.very-slow").hide(100);
        });

        $(".show-btn").click(function () {
           $("p.normal").show();
           $("p.fast").show("fast");
           $("p.slow").show("slow");
           $("p.very-fast").show(50);
           $("p.very-slow").show(100);
        });
    },

    showone: function () {

        $(".h-btn").click(function () {
           $("p.slow").hide("slow", function () {
               alert("Server connected.");
           });

        });

        $(".s-btn").click(function () {
            alert("Server connected.");
           $("p.slow").show("fast");

        });
    },

    toggle: function () {

        $(".toggle").click(function () {
           //$("p.slow").toggle();
           //$("p.slow").toggle("slow");
           $("p.slow").toggle(1000, function () {
               alert("Toggle Effect");
           });


        });
    }

};