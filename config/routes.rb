Rails.application.routes.draw do
  resources :landings
  root "landings#index"
  resources :movies
end
