class Tag < ApplicationRecord
  validates :name, presence: true

  belongs_to :user
  has_many :todo_tags, dependent: :destroy
  has_many :todos, through: :todo_tags
end
