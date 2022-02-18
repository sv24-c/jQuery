/**
 * Created by smit on 18/2/22.
 */
var StyleProperty = {

    styleproperty: function () {
       /* $("div").click(function () {
            var color = $(this).css("background-color");
            $("#result").html(color);
        });*/

      /* $("div").click(function () {
           $(this).css("background-color", "blue");
       });*/

      $("button").click(function () {
           $("p").css({"background-color": "blue", "padding": "20px"});
       });
    }
};