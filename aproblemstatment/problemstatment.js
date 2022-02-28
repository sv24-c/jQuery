/**
 * Created by smit on 25/2/22.
 */
var problemstatment = {

    problem: function () {

       /* // Key press enter detection problem
        $(document).keypress(function (e) {
            if(e.which ==13)
            {
                console.log('You pressed enter');
            }
        });*/

       /*
       // one problem given by smit
       var val = "<button type='button'>Click</button>";

        $("body").on("click","button", function () {

            var v = $("li").text();
            alert("Hello");

        });

        $("body").html(val);*/

       /*$("button").on("click", function () {
            var vid = $(".id").val();
            var vname = $(".name").val();
            var data="<tr><td>"+vid+"</td><td>"+vname+"</td></tr>";
            $("tbody").append(data);

       });*/

       $("body").on("click","button", function () {
           var vid = $(".id").val();
           var vname = $(".name").val();
           var vindex = $(".index").val();

           var data = "<tr><td>"+vid+"</td><td>"+vname+"</td></tr>";
           $("tr").eq(vindex).after(data);
       })
    }
};