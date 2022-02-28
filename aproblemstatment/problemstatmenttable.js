/**
 * Created by smit on 25/2/22.
 */
var problemoftable = {

    protable: function () {


        var i=0;
        $(".addbtn").on("click", function () {

            var vdatavalue = i++;
            var vname = $(".name").val();
            var vlname = $(".lname").val();
            var vemail = $(".email").val();
            var vaddress = $(".address").val();
            var data = "<tr data-value="+vdatavalue+">" +
                "<td>"+vname+"</td>" +
                "<td>"+vlname+"</td>" +
                "<td>"+vemail+"</td>" +
                "<td>"+vaddress+"</td>" +
                "<td><button type='button' class='editbtn'>Edit</button></td>" +
                "<td><button type='button' class='deletebtn'>Delete</button></td>" +
                "</tr>";

            $("tbody").append(data);

            $(".deletebtn").on("click", function () {
                $(this).parent().parent().remove();
            });

            $(".editbtn").on("click", function (event) {

                /*var vindex = $(this).parent().parent().index();
                $("#rowid").val(vindex);*/


                $("#maindiv").hide();
                $("#modalpopup").show();


                var showvalue = $(this).parents("tr").children();
                //console.log(showvalue);
                var list = [".updtname",".updtlname",".updtemail",".updtaddress"];
                $.each(list,function (i, value) {
                    //console.log($(showvalue).eq(i).text());
                    $(value).val($(showvalue).eq(i).text());

                });



                $(".updtbtn").on("click", function (){

                    var updatedName = $(".updtname").val();
                    var updatedLname = $(".updtlname").val();
                    var updatedEmail = $(".updtemail").val();
                    var updatedAddress = $(".updtaddress").val();
                    var updateddata = [updatedName, updatedLname, updatedEmail, updatedAddress];
                    // $.each(updateddata, function (i,value) {
                        //$("tr").find("td").eq(i).replaceWith();

                    var newdata = "<tr>" +
                        "<td>"+updatedName+"</td>" +
                        "<td>"+updatedLname+"</td>" +
                        "<td>"+updatedEmail+"</td>" +
                        "<td>"+updatedAddress+"</td>" +
                        "<td><button type='button' class='editbtn'>Edit</button></td>" +
                        "<td><button type='button' class='deletebtn'>Delete</button></td>" +
                        "</tr>";
                        $(event.currentTarget).parent().parent().replaceWith(newdata);


                    // var vindex = $("#rowid").val();
                    //
                    //  var tableraw=$("tr").eq(vindex);
                    //  $(tableraw).replaceWith(newdata);



                    // });


                    $("#modalpopup").hide();
                    $("#maindiv").show();

                });


            });

            $("#closebtn").on("click", function () {
                $("#modalpopup").hide();
                $("#maindiv").show();
            });


        });
    }
};