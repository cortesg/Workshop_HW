Rails.application.routes.draw do
  # get 'users/index'

  # get 'users/new'

  # get 'users/create'

  # get 'users/show'

  # get 'users/edit'

  # get 'users/delete'

  # get 'users/destroy'


  resources :users

  root 'users#new' 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
