/**
 * Created by smit on 18/2/22.
 */
var Manipulation = {

    getset: function () {

        /*$(".btn-one").click(function () {
            $("p").text("This is demo text");
        });

        $(".btn-two").click(function () {
            $("p:first").text("This is another demo text");
        });

        $(".btn-three").click(function () {
            $("p.empty").text("This is more demo text");
        });*/

       /* $(".btn-one").click(function () {
            var str = $("p").html();
            alert(str);
        });

        $(".btn-two").click(function () {
            var str = $("#container").html();
            alert(str);
        });*/

      /* $("button").click(function () {
           $("body").html("<p>Hello World</p>");
       });*/

        /*$("button").click(function () {
            $('input[type="checkbox"]').attr("checked", "checked");
        });*/

        /*$("button").click(function () {
            $("img").attr({
               "class":"frame",
                "title":"android"
            });
        });*/

       /* $("button").click(function () {

            var text = $(this).text();
            $('input[type="text"]').val(text);
        });*/

      /* $("button").click(function () {
           $("#container").append("This is text. ");
           $("#container").prepend("This is text. ");

       });*/

      /*$("button").click(function () {
            var newHading = "<h1>Important Note:</h1>";
            var newPragraph = document.createElement("p");
                newPragraph.innerHTML = "<em>dummy text</em>";
           $("body").append(newHading,newPragraph);
      });*/

      $("#container").after("<p>&mdash; The End &mdash;</p>");
      $("#container").before("<p>&mdash;Demo Text &mdash;</p>");

      $("button.insert-after").click(function(){
            $("h1").after('<img src="home/smit/one.jpeg" alt="Symbol">');
        });

      $("button.insert-before").click(function(){
            $("h1").before('<img src="/home/smit/one.jpeg" alt="Symbol">');
        });
    }
};