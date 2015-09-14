Rails.application.routes.draw do
  devise_for :users
  resources :landings
  root "landings#index"
  resources :movies do
    resources :reviews
  end
end
