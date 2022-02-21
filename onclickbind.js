/**
 * Created by smit on 21/2/22.
 */
var Onclickbind = {

    onclickbind : function () {
        $("li").bind("click",function () {
            alert("clicked");
        });
    }
};