class Api::V1::TodoTagsController < ApplicationController
  include Authenticatable
  before_action :authenticate_with_token!
  before_action :set_todo_tag, only: [:destroy]

  def create
    todo_tag = TodoTag.new(todo_tag_params)
    if todo_tag.save
      render json: todo_tag
    else
      render json: todo_tag.errors
    end
  end

  def destroy
    @todo_tag.destroy
  end

  private
  def todo_tag_params
    params.require(:todo_tag).permit(:todo_id, :tag_id)
  end

  def set_todo_tag
    @todo_tag = TodoTag.find(params[:id])
  end
end
