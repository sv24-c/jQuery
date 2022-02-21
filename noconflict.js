/**
 * Created by smit on 21/2/22.
 */
var jquery = $.noConflict();

var Noconflict = {

    conflict : function () {

        jquery("button").click(function () {
            jquery("p").text("Noconflict method is called");
        });
    }
};