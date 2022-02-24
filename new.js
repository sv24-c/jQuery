/**
 * Created by smit on 24/2/22.
 */
var pro = {

    problemone: function () {
        /*$(".btn").on("click", function () {

            var vone = "<li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>";
            for(var i=1;i<=5;i++)
            {
                $("ul").append("<li>"+"New Added "+i+"</li>");
            }
            /!* var val= $(event.target).val();
             alert(val)*!/
        });*/

        $("li").on('click', function (event) {
           console.log(event.currentTarget.getAttribute('data-value'));
        });
    },

    problemtwo: function () {

        var clicked = false;
         $(".checkall").on("click", function() {
         $(".checkhour").prop("checked", !clicked);
         $(".checkhour").prop("unchecked", !clicked);

         clicked = !clicked;
         this.innerHTML = clicked ? 'Deselect' : 'Select';

         });
        /*$(".checkhour").each(function () {
         if(!clicked)
         {
         this.checked = true;
         }
         else {
         this.checked = false;
         }
         });

         if(clicked)
         {
         clicked = false;
         }
         else
         {
         clicked = true;
         }
         */

         $(".btn").on("click", function () {
         $('input[type="checkbox"]:').filter("checked","unchecked");
         });
    },

    problemthree: function () {


        $(".btn").on("click", function () {

            $("li").replaceWith("<li>1</li>");
            for(var i=0;i<5;i++){
                $("li").eq(i).replaceWith("<li>"+"New Added "+i+"</li>");
            }


            /*  const arr = ["New All 1", "New All 2", "New All 3", "New All 4", "New All 5"];
             $.each("li", function (i, value) {
             replaceWith(arr[value]);
             });*/
        });



    }

};