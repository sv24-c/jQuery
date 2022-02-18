/**
 * Created by smit on 18/2/22.
 */
var Filtering = {

    filtering: function () {

       /* $("ul li").first().addClass("highlight");*/

         /*$("ul li").last().addClass("highlight");*/

         /*$("ul li").eq(1).addClass("highlight");*/

         /*$("ul li").eq(-1).addClass("highlight");*/

         /*$("ul li").filter(":even").addClass("highlight");*/

         // $("ul li").filter(function (index) {
         //     return index % 2 !=0;
         // }).addClass("highlight");

        ////////////////////////////////////

        //$("ul li").has("ul").addClass("highlight");

        //$("ul li").not(":even").addClass("highlight");

       /* $("ul li").not(function(index){
            return index % 2 !== 0;
        }).addClass("highlight");*/

        //$("ul li").slice(0, 2).addClass("highlight");

        $("ul li").slice(-2, -1).addClass("highlight");
    }
};