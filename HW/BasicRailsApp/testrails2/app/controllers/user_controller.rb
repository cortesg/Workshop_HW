class UserController < ApplicationController
  def index
    @users = User.all
  end

  # action for showing user info
  def show
    @user = User.find(params[:id])
  end

  # action for deleting user
  def destroy
    @user = User.find(params[:id])

    if @user.destroy
      flash[:notice] = "User was deleted"
    else
      flash[:alert] = "User was not deleted"
    end

    redirect_to :index
  end
end
