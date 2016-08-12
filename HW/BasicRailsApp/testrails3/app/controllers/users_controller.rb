class UsersController < ApplicationController

	#http verb :get
	#path/url: /users
  def index
    @users = User.all
  end

  #http verb :get
	#path/url: /users/:id
  # action for showing user info
  def show
    @user = User.find(params[:id])
  end


  #http verb :delete
	#path/url: /users/:id
  # action for deleting user
  def destroy
    @user = User.find(6)
    
    if @user.destroy
      flash[:notice] = "User was deleted"
    else
      flash[:alert] = "User was not deleted"
    end

    # redirect_to index
  end
end
