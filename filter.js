/**
 * Created by smit on 21/2/22.
 */
var Filter = {

    filt : function () {
        $("#myInput").on("keyup", function () {
            var value = $(this).val().toLowerCase();
        $("#myBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) >-1);
        });
        });
    }
};