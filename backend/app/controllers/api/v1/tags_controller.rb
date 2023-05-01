class Api::V1::TagsController < ApplicationController
  include Authenticatable
  before_action :authenticate_with_token!
  before_action :set_tag, except: [:create]

  def create
    tag = current_user.tags.new(tag_params)
    if tag.save
      render json: tag
    else
      render json: tag.errors
    end
  end

  def destroy
    @tag.destroy
  end

  def update
    if @tag.update(tag_params)
      render json: @tag
    else
      render json: @tag.errors
    end
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end

  def set_tag
    @tag = Tag.find(params[:id])
  end
end