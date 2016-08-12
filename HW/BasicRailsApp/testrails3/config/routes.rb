Rails.application.routes.draw do
  root 'users#index'

  get 'users/show/:id' => "users#show"

  get 'users/destroy' 

  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
