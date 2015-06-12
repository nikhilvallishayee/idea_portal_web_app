$("document").ready(function(){
    getLatestBlogs();
});
function getLatestBlogs(){
    $.ajax({
        url : '/blogs/latestBlogs',
        type: "GET",
        format: "JSON",
        success: function(data, textStatus, jqXHR)
        {
            console.log(data.blogs);
            $.each(data.blogs, function(index, blog){
                var clone_blog=$("#blog_template").clone();
                clone_blog.attr('id',"latest_blog_"+blog.id);

                clone_blog.find('.read-more-btn').attr("data-blog-id",blog.id);

                var created_blog=blogDetails(clone_blog,blog);
                $("#blog_row").append(created_blog);
            });
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
            alert ( 'Something went wrong!'+errorThrown, errorThrown);
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
            alert ( 'Something went wrong!'+errorThrown, errorThrown);
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
function blogDetails(clone_blog,blog){
    getBeingInfo(clone_blog,blog.being_id);
    clone_blog.removeClass("hidden");
    clone_blog.find('.blog-title').html(blog.title);
    clone_blog.find('.blog-description').html(blog.text);
    var dateString = formatDate(blog.created_at);
    clone_blog.find('.blog-pub-date').html("Published "+dateString);
    clone_blog.find('.read-more-btn').attr('href','/blogs/'+blog.id);
    clone_blog.find('.read-more-btn').attr("data-blog-id",blog.id);
    // clone_blog.find('.read-more-btn').attr("href",'blogs/'+blog.id);
    return clone_blog;
}


