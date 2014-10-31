class BeingsController < ApplicationController
  def latestIndex
  	@beings = Being.last(5)
  	render :json =>{
  		:status => :ok,
  		:message => "Success",
  		:beings => @beings
  	}.to_json
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
