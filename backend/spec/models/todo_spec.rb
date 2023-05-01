require 'rails_helper'

RSpec.describe Todo, type: :model do
  describe 'Associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_many(:todo_tags) }
    it { is_expected.to have_many(:tags).through(:todo_tags) }
  end

  describe 'Validations' do
    it { is_expected.to validate_presence_of(:title) }
  end
end