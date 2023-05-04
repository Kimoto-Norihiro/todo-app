class Api::V1::UsersController < ApplicationController
  include Authenticatable
  before_action :authenticate_with_token!, except: [:create]

  def show
    data = User.includes(todos: :tags).find(current_user.id).as_json(include: {todos: {include: :tags}})
    render json: data, status: :ok
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :ok
    else
      render json: user.errors
    end
  end

  # TODO: update user validation
  def update
    current_user.update_attribute(:email, params[:email])
    current_user.update_attribute(:name, params[:name])
    
    render json: current_user, status: :ok
  end

  def destroy
    if current_user.destroy
      render status: :ok
    else
      render json: current_user.errors
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
