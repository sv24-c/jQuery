/**
 * Created by smit on 15/2/22.
 */
var Chaining = {

    chain: function () {

       /* $(".start").click(function(){
            $("p").animate({width: "100%"}).animate({fontSize: "46px"}).animate({borderWidth: 30});
        });
        $(".reset").click(function(){
            $("p").removeAttr("style");
        });*/


        $(".start").click(function(){
            $("p")
                .animate({width: "100%"})
                .animate({fontSize: "46px"})
                .animate({borderWidth: 30});
        });
        $(".reset").click(function(){
            $("p").removeAttr("style");
        });
    }
}