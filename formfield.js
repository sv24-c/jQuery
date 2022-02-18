/**
 * Created by smit on 18/2/22.
 */
var Formfield = {

    formfield: function () {

        $("button.get-name").click(function () {
            var name = $("#name").val();
            alert(name);
        });

        $("button.get-comment").click(function () {
            var comment = $("#comment").val();
            alert(comment);
        });

        $("button.get-city").click(function () {
            var city = $("#city").val();
            alert(city);
        });
    }
};