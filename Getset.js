/**
 * Created by smit on 19/2/22.
 */
var Get = {

    get: function () {

        /*$("button").click(function () {
            $.get("Datetime.php", function () {
                $("#result").html(data);
            });
        });*/

        $("button").click(function(){
            // Get value from input element on the page
            var numValue = $("#num").val();

            // Send the input data to the server using get
            $.get("createtable.php", {number: numValue} , function(data){
                // Display the returned data in browser
                $("#result").html(data);
            });
        });
    }

};