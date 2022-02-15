/**
 * Created by smit on 15/2/22.
 */
var Callback = {

    callback: function () {

        $("button").click(function () {

            $("h1, p").slideToggle("slow", function () {

            });
        });
    }
}