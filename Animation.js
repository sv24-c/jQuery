/**
 * Created by smit on 15/2/22.
 */
var animation = {

    anima: function () {

        $("button").click(function () {
           /*$("img").animate({
               left:300,
           });*/

           /*$(".box").animate({
               width: "300px" ,
               height: "300px" ,
               margineLeft: "150px",
               borderWidth: "10px",
               opacity: 0.5
           });*/

           /*$(".box")
               .animate({width: "300px"})
               .animate({height: "300px"})
               .animate({marginLeft: "150px"})
               .animate({borderWidth: "10px"})
               .animate({opacity: 0.5});*/

          /* $(".box").animate({

               top: "+=50px",
               left: "+=50px",
               width: "+=50px",
               height: "+=50px"
           });*/

          $(".box").animate({
              width: 'toggle'
          });
        });
    }
}