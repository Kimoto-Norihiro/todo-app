require 'rails_helper'

RSpec.describe "Users", type: :request do
  let (:user) { create(:user) }
  let (:token) { TokenService.issue_token(user.id) }
  let (:header) { {'Authorization': "Bearer #{token}"} }

  describe "GET /show" do
    it "returns http success" do
      get api_v1_users_path, headers: header
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    it "returns http success" do
      post api_v1_users_path, params: { user: attributes_for(:user) }
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT /update" do
    it "returns http success" do
      put api_v1_users_path, headers: header, params: { name: 'change name', email: 'change email' }
      expect(response).to have_http_status(:success)
    end
  end

  describe "DELETE /delete" do
    it "returns http success" do
      delete api_v1_users_path, headers: header
      expect(response).to have_http_status(:success)
    end
  end
end
