Rails.application.routes.draw do
  get '/scores/highscores', to: 'scores#highscores', as: 'highscores'
  resources :scores, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
