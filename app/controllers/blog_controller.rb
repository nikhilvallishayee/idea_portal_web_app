class BlogController < ApplicationController
  def recentIndex
  	@blogs = Blog.last(2)
  	render :json =>{
  		:status => :ok,
  		:message => "Success",
  		:blogs => @blogs
  	}.to_json
  end
end
