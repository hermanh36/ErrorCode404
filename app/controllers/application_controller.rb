class ApplicationController < ActionController::Base

  helper_method :logged_in?, :current_user
  def require_logged_in
    if !logged_in?
      render json: {base: ['Invalid Credentials']}, status: 401
    end
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
    if @current_user
      return @current_user
    else
      return nil
    end
  end
  
  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
    @current_user = user
    return @current_user
  end

  def logout
    @current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end
end
