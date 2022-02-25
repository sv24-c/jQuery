/**
 * Created by smit on 25/2/22.
 */
var problemoftable = {

    protable: function () {

        $(".addbtn").on("click", function () {

            var vname = $(".name").val();
            var vlname = $(".lname").val();
            var vemail = $(".email").val();
            var vaddress = $(".address").val();
            var data = "<tr>" +
                "<td>"+vname+"</td>" +
                "<td>"+vlname+"</td>" +
                "<td>"+vemail+"</td>" +
                "<td>"+vaddress+"</td>" +
                "<td><button type='button' class='editbtn'>Edit</button></td>" +
                "<td><button type='button' class='deletebtn' onclick='deletedRow()'>Delete</button></td>" +
                "</tr>";

            $("tbody").append(data);


        });

        function deletedRow()
        {
            $(data).empty();
        }

    }

};