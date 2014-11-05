$("document").ready(function(){
	getLatestBeingInstances();
});
function getLatestBeingInstances(){
	$.ajax({
        url : '/beings/latestIndex',
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
        	
		    console.log(data.beings);
			    	
          	$.each(data.beings, function(index, being) {
              	var clone_being=$("#being_template").clone();
    			clone_being.removeClass("hidden");
                //console.log(being.photo.url);
    	       	clone_being.attr('id',"being_"+being.id);
              	clone_being.find('.being-name').html(being.name);		
                clone_being.find('.being-description').html(being.short_description);
                 // clone_being.find('.being-image').attr("src",photo.url);
                clone_being.find('.being-facebook').attr("href",being.link_facebook);
                clone_being.find('.being-twitter').attr("href",being.link_twitter);
    		    clone_being.find('.being-flickr').attr("href",being.link_flickr);
    		    // clone_blog.find('.read-more-btn').attr("data-blog-id",blog.id);
    		    $("#being_row").append(clone_being);		
            });	
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert ( 'Something went wrong!', error_message);
        }

    });
}
function signUp(){
    $('#new').removeClass('hidden')
}