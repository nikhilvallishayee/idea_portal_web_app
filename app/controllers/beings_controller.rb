class BeingsController < ApplicationController
  #before_filter :add_user ,:only => :create
  def new
  end

  
  def latestBeings
  	@beings = Being.where(is_team_member: true).last(5)

    if @beings
      render :json =>{
    		:status => :ok,
    		:message => "Success",
    		:beings => @beings.to_json(:only => [:id,:name,:short_description,:link_facebook,:link_flickr,:link_twitter], :methods => [:photo_url])
    	}
    else
       render :json =>{
        :status => :unprocessable_entity,
        :message => "Failure",
      } 
    end
  end
 

  def create
    params[:beings][:password] = "foo"
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
