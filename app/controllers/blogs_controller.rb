class BlogsController < ApplicationController
  def index
    @blogs=Blog.select("id, LEFT(text,10) as text ,title,created_at,updated_at,being_id")
    respond_to do |format|
      format.html 
      format.json { render :json =>{:status => :ok,:message => "Success",:blogs => @blogs}}
    end  
  end

  def latestBlogs
  	@blogs = Blog.select("id, LEFT(text,10) as text ,title,created_at,updated_at,being_id").last(2)
  	render :json =>{
  		:status => :ok,
  		:message => "Success",
  		:blogs => @blogs
  	}
  end
  def create
   	params[:blog][:being_id] = current_user.id

  	@blog = Blog.new(params[:blog])
   	
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
    @blog = Blog.find(params[:id])
    respond_to do |format|

      format.html 
      format.json { render :json =>{:status => :ok,:message => "Success",:blog => @blog}}
    end  
  end
  
  
end
