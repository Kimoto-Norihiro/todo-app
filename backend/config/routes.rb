Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:show, :create, :update, :destroy]
      resources :todos, only: [:index, :create, :update, :destroy]
      resources :tags, only: [:create, :update, :destroy]
      resources :todo_tags, only: [:create, :destroy]
      post "/sign_in", to: "sessions#create"
    end
  end
end
