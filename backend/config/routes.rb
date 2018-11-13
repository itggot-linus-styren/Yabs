Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :roles
      resources :users
    end
  end
  root 'application#show'
  match '/*path', to:'application#show', via: :all
end
