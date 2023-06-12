class Api::V1::TodosController < ApplicationController
  include Authenticatable
  before_action :authenticate_with_token!
  before_action :set_todo, only: [:update, :destroy]

  def index
    todo = Todo.where(user_id: current_user.id).as_json(include: [:tags])
    render json: todo, status: :ok
  end

  def show
    todo = Todo.find(params[:id]).as_json(include: [:tags])
    render json: todo, status: :ok
  end

  def create
    todo = current_user.todos.new(todo_params)
    if todo.save
      render json: todo
    else
      render json: todo.errors
    end
  end

  def destroy 
    if @todo.destroy
      render status: :ok
    else
      render json: @todo.errors
    end
  end

  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :body)
  end

  def set_todo
    @todo = Todo.find(params[:id])
  end
end