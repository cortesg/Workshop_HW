Rails.application.routes.draw do

  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


# get 'home/index' 
  
resources :users

get 'test/page'

get 'test2/page'
  
get '/transactions' => 'transactions#index'

root 'home#index'

end


