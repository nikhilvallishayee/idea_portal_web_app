class CommentsController < ApplicationController
  def index
    @blog =Blog.find(params[:blog_id])
    @comments =@blog.comments.all
    render :json =>{
        :status =>:ok,
        :message => "Success!",
        :comments =>@comments
    }
  end
  def create
    params[:comment][:being_id] = current_user.id
    @blog = Blog.find(params[:blog_id])
    @comment = @blog.comments.create(params[:comment])
    if @blog.save
      render :json => {
          :status => :ok,
          :message => "Success!",
          :blog => @blog,
          :comment => @comment
      }
    else
      render :json => {
          :status => :unprocessable_entity,
          :message => "Failure!",
          :blog => {},
          :comment => {}
      }
    end
  end
end