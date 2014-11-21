$("document").ready(function(){
    $("#all-blogs").removeClass("hidden");
    getAllBlogs();

    if($('#user_id').val()!='' && $('#user_id').val()!=undefined)
        getBeingDetails($('#user_id').val());

    $("#a-add-blog").click(function(){
        $("#add-blog").removeClass("hidden");
        $("#all-blogs").addClass("hidden");
    });

    $("#a-read-blogs").click(function(){
        $("#add-blog").addClass("hidden");
        $("#all-blogs").removeClass("hidden");
    });

    $("#btn-blog-save").click(function(){
        console.log("hello");
        saveBlog();
    });

});

function getBeingDetails(id){


    $.ajax({
        url : '/beings/'+id,
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
              console.log("selected");
              console.log(data.being);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!'+errorThrown, errorThrown);
        }
    });
}

function getAllBlogs(){
    $.ajax({
        url : '/blogs.json',
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {

            $.each(data.blogs, function(index, blog){
                if(!$("#blog_"+blog.id).length)
                {
                    var clone_blog_row = $("#all-blogs").find("#blog_template").clone();
                    clone_blog_row.attr('id',"blog_"+blog.id);
                    var created_blog_row=blogDetails(clone_blog_row,blog);
                    $('#all-blogs > tbody:last').append(created_blog_row);
                }
            });
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!'+errorThrown, errorThrown);
        }
    });
}
function saveBlog()
{
    var form_data=$("#blog").serialize();
    $.ajax({
        url : '/blogs',
        type: "POST",
        data: form_data,
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
            console.log(data);
            $("#add-blog").addClass("hidden");
            $("#all-blogs").removeClass("hidden");

            getAllBlogs();
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!', errorThrown);
        }

    });
}