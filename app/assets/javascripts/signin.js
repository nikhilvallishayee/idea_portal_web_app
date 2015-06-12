$(document).ready(function(){
   $("#btn-sign-in").click(function(){
    signInUser();
   });
});
function signInUser(){
    var data=$('#session').serialize();
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