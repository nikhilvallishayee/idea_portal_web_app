$(document).ready(function(){
   $("#btn-sign-in").click(function(){
       console.log("hello....");
        signInUser();
   });
});
function signInUser(){
    var data=$('#session').serialize();
    console.log("hello again");
    $.ajax({
        url : '/sign_in',
        type: "POST",
        data: data,
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
             if(data.status=="ok") {
                 location.reload(true);
             }
             else{
                 alert("Incorrect UserId or Password");
             }
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!', error_message);
        }
    });
}