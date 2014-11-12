class BlogsController < ApplicationController
  def index
  	@blogs = Blog.last(2)
  	render :json =>{
  		:status => :ok,
  		:message => "Success",
  		:blogs => @blogs
  	}
  end
  def create
  	params[:blogs][:being_id] = current_user.id
  	@blog = Blog.new(params[:blogs])
   	
   	if @blog.save
   		render :json =>{
	  		:status => :ok,
	  		:message => "Success",
	  		:blog => @blog
  		}
  	else
  		render :json =>{
  			:status => :unprocessable_entity,
  			:message => "Failure",
  		}
  	end		
  end
  def show
  end
end
