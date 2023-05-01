require 'rails_helper'

RSpec.describe "Users", type: :request do
  let (:user) { create(:user) }
  let (:token) { TokenService.issue_token(user.id) }
  before { cookies[:token] = token }

  describe "GET /show" do
    it "returns http success" do
      get api_v1_user_path(user.id)
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    it "returns http success" do
      post api_v1_users_path(), params: { user: attributes_for(:user) }
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT /update" do
    it "returns http success" do
      user = create(:user)

      put api_v1_user_path(user.id), params: { user: { name: 'change name' }}
      expect(response).to have_http_status(:success)
    end
  end

  describe "PATCH /delete" do
    it "returns http success" do
      delete api_v1_user_path(user.id)
      expect(response).to have_http_status(:success)
    end
  end
end
