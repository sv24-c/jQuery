/**
 * Created by smit on 22/2/22.
 */
var delegatevent = {

    del:function () {
        $("body").on("click","p",function (event) {
            $(this).after("<p>Another text</p>");
        });
    }
};