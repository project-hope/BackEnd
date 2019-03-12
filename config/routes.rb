Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api, format: :json do
      resources :divorce, only: %i(index)
      resources :disability, only: %i(index)
  end
end
