/**
 * Created by smit on 21/2/22.
 */

var eventbound = {

    bound: function () {

        $(".parent").on("click", function (e) {

            if (e.target == this)
            {
                alert("parent was clicked");
            }


        });
    }
};