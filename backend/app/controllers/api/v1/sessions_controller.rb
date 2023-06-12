class Api::V1::SessionsController < ApplicationController
  def create
    token = TokenService.issue_by_password!(params[:email], params[:password])
    cookies[:token] = token

    render json: {token: token}, status: :created
  end
end