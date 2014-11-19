$("document").ready(function(){
  $("#all-blogs").removeClass("hidden");
    getAllBlogs();

  if($('#user_id').val()!=undefined)
    getBeingDetails();

  $("#a-add-blog").click(function(){
    $("#add-blog").removeClass("hidden");
    $("#all-blogs").addClass("hidden");
  });

  $("#a-read-blogs").click(function(){
    $("#add-blog").addClass("hidden");
    $("#all-blogs").removeClass("hidden");
  });
});

// function showBlog(id){
//   $.ajax({
//         url : '/blogs/'+id,
//         type: "GET",
//         format: "JSON",
//         success: function(data, textStatus, jqXHR)
//         {
//                 var clone_blog=$("#show_blog_template").clone();
//                 clone_blog.attr('id',"blog_"+data.blog.id);
//                 var created_blog=blogDetails(clone_blog,data.blog);
//                 $("#read-more-blog").append(created_blog);    
//         },
//         error: function (jqXHR, textStatus, errorThrown)
//         {
//           alert ( 'Something went wrong!'+errorThrown, errorThrown);
//         }
//     });
// }

function getBeingDetails(){
	var id =$('#user_id').val(); 
  
	$.ajax({
        url : '/beings/'+id,
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
         //  console.log("selected");
        	// console.log(data.being);
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