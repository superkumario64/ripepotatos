Rails.application.routes.draw do
  resources :landings
  root "landings#index"
end
