Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :users, only: [:show, :create, :update, :destroy]
      resources :todos, only: [:index, :show, :create, :update, :destroy]
      resources :tags, only: [:index, :create, :update, :destroy]
      resources :todo_tags, only: [:create, :destroy]
      post "/sign_in", to: "sessions#create"
      get "/sign_out", to: "sessions#destroy"
    end
  end
end
