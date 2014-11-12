$("document").ready(function(){
  if($('#user_id').val()!=undefined)
    getBeingDetails();
  $("#a-add-blog").click(function(){
    $("#add-blog").removeClass("hidden");
  });  
});
// $("#user_id").change(function() {
//   getBeingDetails();
// });
function getBeingDetails(){
	var id =$('#user_id').val(); 
    console.log(id);
	$.ajax({
        url : '/dashboard/'+id,
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
            console.log("selected");
        	console.log(data.being);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert ( 'Something went wrong!', errorThrown);
        }
    });
}