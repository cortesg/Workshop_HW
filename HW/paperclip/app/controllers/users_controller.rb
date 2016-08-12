class UsersController < ApplicationController
  def index
    @user = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create( user_params )
  end

  def show
    @user = User.all
  end

  def edit
  end

  def delete
    @user.avatar = nil
    @user.save
  end

  def destroy
  end

private

# Use strong_parameters for attribute whitelisting
# Be sure to update your create() and update() controller methods.

def user_params
  params.require(:user).permit(:avatar)
end

end

