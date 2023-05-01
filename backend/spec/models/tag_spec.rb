require 'rails_helper'

RSpec.describe Tag, type: :model do
  describe 'Associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_many(:todo_tags) }
    it { is_expected.to have_many(:todos).through(:todo_tags) }
  end

  describe 'Validations' do
    it { is_expected.to validate_presence_of(:name) }
  end
end
