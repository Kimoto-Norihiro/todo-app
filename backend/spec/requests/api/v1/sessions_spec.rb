require 'rails_helper'

RSpec.describe "Sessions", type: :request do
  let (:user) { create(:user) }
  let (:token) { TokenService.issue_token(user.id) }
  before { cookies[:token] = token }

  describe "GET /sign_out" do
    it "returns http success" do
      get "/api/v1/sign_out"
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    it "returns http success" do
      post "/api/v1/sign_in", params: { email: user.email, password: user.password }
      expect(response).to have_http_status(:success)
    end
  end
end