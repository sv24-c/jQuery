/**
 * Created by smit on 18/2/22.
 */
var Remove = {

    remove: function () {
       /* $("button").click(function(){
            $(".container").empty();
        });*/

       /* $("button").click(function(){
            //$("p.hint").remove();
            //$("p").remove(".hint");
            $("p").unwrap();
        });*/

        $("button").click(function(){
        $("a").removeAttr("href");
    });
    }
};