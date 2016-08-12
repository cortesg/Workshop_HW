Rails.application.routes.draw do

  get 'sessions/new'

  get 'sessions/create'

  get 'sessions/destroy'

  get "/log-in" => "sessions#new"
	post "/log-in" => "sessions#create"
	get "/log-out" => "sessions#destroy", as: :log_out
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'home#index'

  resources :home
  resources :users
  resources :sessions
end
