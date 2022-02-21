/**
 * Created by smit on 21/2/22.
 */
var Toughstart = {

    touch: function () {
        $("#btn").on("touchstart click", function (event) {

            if(event.type == "touchstart")
            {
                $(this).off("click");
                alert("Only touch event is fired");
            }
            else if(event.type == "click")
            {
                $(this).off("toustart");
                alert("Only click event is fired");

            }
        });
    }
};