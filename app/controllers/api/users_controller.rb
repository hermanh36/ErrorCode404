class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token


  def index 
    @users = User.all;
    render 'api/users/index'
  end
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status:422
    end
  end

  def user_params
    return params.require(:user).permit(:username,:email,:password)
  end
end