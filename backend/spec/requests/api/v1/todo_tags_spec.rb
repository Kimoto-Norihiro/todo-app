require 'rails_helper'

RSpec.describe "Api::V1::TodoTags", type: :request do
  let (:user) { create(:user) }
  let (:todo) { create(:todo, user: user) }
  let (:tag) { create(:tag, user: user) }
  let (:token) { TokenService.issue_token(user.id) }
  let (:header) { {'Authorization': "Bearer #{token}"} }

  describe "POST /create" do
    it "returns http success" do
      post api_v1_todo_tags_path(), headers: header, params: { todo_tag: { todo_id: todo.id, tag_id: tag.id }}
      expect(response).to have_http_status(:success)
    end
  end

  describe "PATCH /delete" do
    it "returns http success" do
      todo_tag = create(:todo_tag, todo: todo, tag: tag)

      delete api_v1_todo_tag_path(todo_tag.id), headers: header
      expect(response).to have_http_status(:success)
    end
  end
end
