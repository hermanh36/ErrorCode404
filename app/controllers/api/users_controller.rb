class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
    if @user.save
      render 'api/users/show'
    else
      render json: @user.errors.full_messages
    end
  end

  def user_params
    return params.require(:user).permit(:username,:email,:password,:first_name, :last_name)
  end
end