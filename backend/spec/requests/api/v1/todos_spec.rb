require 'rails_helper'

RSpec.describe "Todos", type: :request do
  let (:user) { create(:user) }
  let (:token) { TokenService.issue_token(user.id) }
  before { cookies[:token] = token }

  describe "POST /create" do
    it "returns http success" do
      post api_v1_todos_path(), params: { todo: attributes_for(:todo) }
      expect(response).to have_http_status(:success)
    end
  end

  describe "PUT /update" do
    it "returns http success" do
      user = create(:user)
      todo = create(:todo, user: user)

      put api_v1_todo_path(todo.id), params: { todo: { title: 'change title' }}
      expect(response).to have_http_status(:success)
    end
  end

  describe "PATCH /delete" do
    it "returns http success" do
      user = create(:user)
      todo = create(:todo, user: user)

      delete api_v1_todo_path(todo.id)
      expect(response).to have_http_status(:success)
    end
  end
end
