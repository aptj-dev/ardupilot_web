Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :hoges

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  scope module: 'api' do
    namespace :v1 do
      resources :drones, defaults: { format: :json } do
        get 'get_drone_position'
      end
      resources :users, only: [:index, :show, :create]
    end
  end
end
