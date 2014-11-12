$("document").ready(function(){
	getLatestBlogs();
    $("#btn-blog-save").click(function(){
        console.log("hello");
        saveBlog();
    });
});
function getLatestBlogs(){
	$.ajax({
        url : '/blogs/index',
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
            console.log(data.blogs);
			     $.each(data.blogs, function(index, blog){
          	    var clone_blog=$("#blog_template").clone();
                getBeingInfo(clone_blog,blog.being_id);
                clone_blog.removeClass("hidden");
	       		    clone_blog.attr('id',"blog_"+blog.id);
              	clone_blog.find('.blog-title').html(blog.title);		
                clone_blog.find('.blog-description').html(blog.text);
		            var dateString = formatDate(blog.created_at);
                clone_blog.find('.blog-pub-date').html("Published "+dateString);
                clone_blog.find('.read-more-btn').attr("data-blog-id",blog.id);
		      	    $("#blog_row").append(clone_blog);		
            });	
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert ( 'Something went wrong!', errorThrown);
        }

    });
}

function saveBlog()
{
    var form_data=$("#blogs").serialize();
    $.ajax({
        url : '/blogs',
        type: "POST",
        data: form_data,
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
          console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert ( 'Something went wrong!', errorThrown);
        }

    });
}
function getBeingInfo(clone_blog,being_id){
  
    $.ajax({
        url : '/beings/'+being_id,
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
            var being=JSON.parse(data.being);
            clone_blog.find('.being-title').html(being.name);
            clone_blog.find('.being-image').attr("src",being.photo_url);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert ( 'Something went wrong!', errorThrown);
        }
    });
}
function formatDate(created_at){
     var published = new Date(created_at);
     // var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
     var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     // var format = weekdays[published.getDay()] + ', ' + months[published.getMonth()] + ' ' + published.getDate() + ', ' + published.getFullYear();
     var formatted = months[published.getMonth()] + ' ' + published.getDate() + ', ' + published.getFullYear();
     return formatted;
}