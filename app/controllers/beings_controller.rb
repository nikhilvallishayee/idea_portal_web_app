class BeingsController < ApplicationController
   # before_filter :add_user 
   before_filter :add_user ,:only => :create
  def latestIndex
  	@beings = Being.last(5)
    render :json =>{
  		:status => :ok,
  		:message => "Success",
  		:beings => @beings
  	}.to_json
  end
 
  def add_user
      if User.create({:email => params[:beings][:email], :encrypted_password => "xyz123"})
        @user=User.find_by_email(params[:beings][:email])
        params[:beings][:user_id] = @user.id
      else
            console.log("Failed");
      end 
  end

  def create
    @being = Being.new(params[:beings])
   
  	if @being.save
  	    render :json => { 
  	        :status => :ok, 
  	        :message => "Success!",
  	        :being => @being
  	    }.to_json
  	else 
  	    render :json => { 
  		    :status => :unprocessable_entity, 
  		    :message => "Failure!",
  		    :being => @being
  		}.to_json
    end
  end
end
