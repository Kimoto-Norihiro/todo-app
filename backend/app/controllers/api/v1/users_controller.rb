class Api::V1::UsersController < ApplicationController
  include Authenticatable
  before_action :authenticate_with_token!, except: [:create]

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :ok
    else
      render json: user.errors
    end
  end

  def show
    data = User.includes(:todos, :tags).find(current_user.id)
    render json: data, status: :ok
  end

  def update
    if current_user.update(user_params)
      render json: current_user
    else
      render json: current_user.errors
    end
  end

  def destroy
    current_user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
