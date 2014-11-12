class BeingsController < ApplicationController
  before_filter :add_user ,:only => :create
  def latestIndex
  	@beings = Being.last(5)
    render :json =>{
  		:status => :ok,
  		:message => "Success",
  		:beings => @beings.to_json(:only => [:id,:name,:short_description,:link_facebook,:link_flickr,:link_twitter], :methods => [:photo_url])
  	}
  end
 
  def add_user
      if User.create({:email => params[:beings][:email], :password => "abcd1234"})
        @user=User.find_by_email(params[:beings][:email])
        params[:beings][:user_id] = @user.id
      else
            console.log("Failed");
      end 
  end

  def create
    @being = Being.new(params[:beings])
    p params[:beings]
  	if @being.save
  	       render :json => { 
  	           :status => :ok, 
  	           :message => "Success!",
  	           :being => @being
  	       }
          # redirect_to url_for(:controller => :dashboard, :action => 'show', :id => params[:beings][:user_id])
          # render @dashboard
  	else 
  	    render :json => { 
  		    :status => :unprocessable_entity, 
  		    :message => "Failure!",
  		    :being => @being
  		}
    end
  end
  def show
    @being= Being.find(params[:id]) 
      render :json =>{
        :status => :ok,
        :message => "Success",
        :being => @being.to_json(:only => [:id,:name,:short_description,:link_facebook,:link_flickr,:link_twitter], :methods => [:photo_url])
      }
  end
end
