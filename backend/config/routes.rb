Rails.application.routes.draw do
  get '/scores/highscores', to: 'scores#highscores', as: 'highscores'
  resources :scores
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
