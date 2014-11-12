class DashboardController < ApplicationController
	before_filter :admin_access
	def show
		@being = Being.find(params[:id])
		render :json=>{
			:status => :ok,
			:message =>"Success",
			:being =>@being
		}
	end
	def admin_access
		unless current_user
		 	deny_access
		 end 
	end	
end
