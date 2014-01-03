class SessionController < ApplicationController
  skip_before_filter :verify_authenticity_token, :only => [:create,:index]

  def create
    @user = User.find_or_create_from_auth_hash(auth_hash)
    session[:user_id] = @user.id

    respond_to do |format|
      format.json { render :json, @user }
      format.html { redirect_to root_path }
    end
  end

  def index
    respond_to do |format|
      if current_user
        format.json { render json: current_user}
      else
        format.json { render json: {}, status: :unauthorized }
      end
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

    protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
