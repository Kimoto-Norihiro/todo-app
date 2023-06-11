require 'rails_helper'

RSpec.describe "Tags", type: :request do
  let (:user) { create(:user) }
  let (:token) { TokenService.issue_token(user.id) }
  let (:header) { {'Authorization': "Bearer #{token}"} }

  describe "GET /index" do
    it "returns http success" do
      get api_v1_tags_path(), headers: header
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    it "returns http success" do
      post api_v1_tags_path(), headers: header, params: { tag: attributes_for(:tag) }
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT /update" do
    it "returns http success" do
      tag = create(:tag, user: user)

      put api_v1_tag_path(tag.id), headers: header, params: { tag: { name: 'change name' } }
      expect(response).to have_http_status(:success)
    end
  end

  describe "DELETE /delete" do
    it "returns http success" do
      tag = create(:tag, user: user)

      delete api_v1_tag_path(tag.id), headers: header
      expect(response).to have_http_status(:success)
    end
  end
end
