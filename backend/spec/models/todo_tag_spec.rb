require 'rails_helper'

RSpec.describe TodoTag, type: :model do
  describe 'Associations' do
    it { is_expected.to belong_to(:todo) }
    it { is_expected.to belong_to(:tag) }
  end
end
