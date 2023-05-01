class Api::V1::SessionsController < ApplicationController
  def create
    token = TokenService.issue_by_password!(params[:email], params[:password])
    cookies[:token] = token
    render status: :created
  end
end