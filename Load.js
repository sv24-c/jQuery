/**
 * Created by smit on 19/2/22.
 */
var Load = {

    load: function () {

        $("button").click(function () {
            $("#box").load("Testcontent.html");
        });
    },
    
    loading: function () {
        
       /* $("button").click(function () {
            $("#box").load("Testcontent.html", function (responseTxt, statusTxt, jqXHR) {
                if(statusTxt == "success")
                {
                    alert("New Content loaded");
                }

                if (statusTxt == "error")
                {
                    alert("Error: "+jqXHR.status+" "+jqXHR.statusText);
                }
            });

        });*/

        $("button").click(function () {
            $("#box").load("Testcontent.html #hint");
        });
    }
};