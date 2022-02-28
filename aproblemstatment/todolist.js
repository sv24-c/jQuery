/**
 * Created by smit on 28/2/22.
 */
var todolist = {

    todo: function () {

        $("#addbtn").on("click", function () {
            var name = $("#name").val();
            var data = "<p>" + name+
                "<button id='deletebtn' onclick='todolist.delete(this)' type='button'>Delete</button>"
                +"<button id='editbtn' onclick='todolist.edit(this)' type='button'>Edit</button>"+
                "</p>";
            $("body").append(data);

        });

    },

    delete:function (event) {
        $(event).parent().remove();
    },

    edit: function (event) {
        
    }
};
