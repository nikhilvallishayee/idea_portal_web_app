$("document").ready(function(){
	getLatestBeingInstances();
    $("#btn-being-save").click(function() {
         createBeing();
    });
});
function getLatestBeingInstances(){
	$.ajax({
        url : '/beings/latestIndex',
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
            
			$.each(JSON.parse(data.beings), function(index, being) {
              	var clone_being=$("#being_template").clone();
    			clone_being.removeClass("hidden");
                clone_being.attr('id',"being_"+being.id);
              	clone_being.find('.being-name').html(being.name);		
                clone_being.find('.being-description').html(being.short_description);
                clone_being.find('.being-facebook').attr("href",being.link_facebook);
                clone_being.find('.being-twitter').attr("href",being.link_twitter);
                clone_being.find('.being-flickr').attr("href",being.link_flickr);
    		    clone_being.find('.being-image').attr("src",being.photo_url);
    		    $("#being_row").append(clone_being);		
            });	
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert ( 'Something went wrong!', errorThrown);
        }
    });
}

function createBeing(){
    var form_data = new FormData(document.forms.namedItem("beings"));
    $.ajax({
             url:"/beings",
             type:'POST',
             data:form_data,
             processData: false,  
             contentType: false ,
             success: function(data, textStatus, jqXHR){
                    window.location.href="/sign_in";
             },
             error:function(jqXHR,textStatus,errorThrown){
                    alert ( 'Something went wrong!', errorThrown);
             }
         });
}
