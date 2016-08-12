class UsersController < ApplicationController
	
	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			flash[:notice] = "Welcome to the site!"
			# redirect_to "/"
			session[:user_id] = @user.id
			redirect_to "/users/index"
		else
			flash[:alert] = "There was a problem creating your account. Please try again."
			# redirect_to :back
			redirect_to "/users/index"
		end
	end

	private
	def user_params
		params.require(:user).permit(:email, :password, :password_confirmation)
	end
end



