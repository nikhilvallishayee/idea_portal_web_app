$(document).ready(function(){
    if($("#blogid").val()!==undefined){
        getComments($("#blogid").val());
        getblog($("#blogid").val());
    }
    $("#btn-comment-save").click(function(){
        if($("#current_user_id").val()=="") {
          $("#signIn")[0].click()
        }
        else{
            saveComment($("#blogid").val());
        }
    });
});
function getComments(id){
    $.ajax({
        url : '/blogs/'+id+'/comments',
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
           console.log("test");
           console.log(data);
           showComments(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!'+errorThrown, errorThrown);
        }
    });
}
function showComments(data){
//    $("#show_comments tbody tr").remove();
    $("#showcomments").removeClass("hidden");
    $.each(data.comments, function(index, comment) {
        appendComment(comment);
    });
}
function saveComment(id){
    var data=$('#comment').serialize();
    $.ajax({
        url : '/blogs/'+id+'/comments',
        type: "POST",
        data: data,
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
           console.log("gg"+data.comment);
           appendComment(data.comment);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!'+errorThrown, errorThrown);
        }
    });
}
function getblog(id){
    $.ajax({
        url : '/blogs/'+id+'.json',
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
           console.log("hello");
           getAuthorDetails(data.blog.being_id);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!'+errorThrown, errorThrown);
        }
    });
}
function getAuthorDetails(id){
    $.ajax({
        url : '/beings/'+id,
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
            console.log("jgh");
            var being=JSON.parse(data.being);
            var clone_author=$("#author_template").clone();
            console.log(clone_author);
            clone_author.removeClass("hidden");
            clone_author.attr('id',"author_"+being.id);
            clone_author.find('.author-name').html(being.name);
            clone_author.find('.author-description').html(being.short_description);
            clone_author.find('.author-image').attr("src",being.photo_url);
            $("#author_row").append(clone_author);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!'+errorThrown, errorThrown);
        }
    });
}
function getCommenter(clone_comment,id){
    $.ajax({
        url : '/beings/'+id,
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
            var being=JSON.parse(data.being);
            clone_comment.find('.commenter-name').html(being.name);
            clone_comment.find('.commenter-image').attr("src",being.photo_url);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!'+errorThrown, errorThrown);
        }
    });
}
function appendComment(comment){
    var clone_comment=$("#comments_template").clone();
    console.log(clone_comment);
    console.log(comment.being_id);
    clone_comment.removeClass("hidden");
    clone_comment.attr('id',"comment_"+comment.id);
    clone_comment.find('.comment-text').html(comment.body);
    clone_comment.find('.comment-date').html(comment.created_at);
    getCommenter(clone_comment,comment.being_id);
    $("#show_comments").append(clone_comment);
}