$("document").ready(function(){
	getLatestBlogs();
});
function getLatestBlogs(){
	$.ajax({
        url : '/blog/recentIndex',
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
        	
		    console.log(data.blogs);
			    	
          	$.each(data.blogs, function(index, blog) {
          	var clone_blog=$("#blog_template").clone();
				    clone_blog.removeClass("hidden");
	       		clone_blog.attr('id',"blog_"+blog.id);
          			
		      	clone_blog.find('.blog-title').html(blog.title);		
		      	clone_blog.find('.blog-description').html(blog.title);
		      	clone_blog.find('.read-more-btn').attr("data-blog-id",blog.id);
		      	$("#blog_row").append(clone_blog);		
            });	
          
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert ( 'Something went wrong!', error_message);
        }

    });
}