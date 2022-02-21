/**
 * Created by smit on 21/2/22.
 */
/*
var jqxhr = {

    jq: function () {

        $(".btn-one").click(function () {
            $.done(function () {
                alert("Success");
            });

            $.fail(function () {
                alert("Fail");
            });

            $.always(function () {
                alert("complete");
            });
        });

    }

};*/

var Ajaxmethod = {

    method: function () {

        $(".btn-one").click(function () {
           /* $.ajax({url : "demo.txt",success: function (result) {
                $("#di").html(result);
            }});*/

           // $.ajax({url: "ajaxscript.js", dataType: "script"});

            /*$.ajax({url:"d.txt", error: function (jqr) {
                alert("An error Occured: "+jqr.status+" "+jqr.statusText);
            }});*/

            $.ajax({url: "demo.txt", async: false, timeout:500 ,success: function (result) {
                $("#di").html(result);
            }})
        });
    }
};