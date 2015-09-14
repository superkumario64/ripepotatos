Rails.application.routes.draw do
  devise_for :users
  resources :landings
  root "landings#index"
  resources :movies
end
