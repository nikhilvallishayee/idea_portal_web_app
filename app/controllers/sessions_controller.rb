class SessionsController < Clearance::SessionsController
  skip_before_filter :authorize, only: [:create, :new, :destroy]
  protect_from_forgery except: :create

  def create
    @user = authenticate(params)
    sign_in(@user) do |status|
      if status.success?
        url_after_create
      else
        flash.now.notice = status.failure_message
         # render template: 'sessions/new', status: :unauthorized
      end
    end
  end

  def destroy
    sign_out
    redirect_to url_after_destroy
  end

  def new
    render template: 'sessions/new'
  end

  private

  def url_after_create
   redirect_to url_for(:controller => :dashboard, :action => 'index')
  end

  def url_after_destroy
    root_path
  end

end