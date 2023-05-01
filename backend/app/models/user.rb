class User < ApplicationRecord
	has_secure_password
	validates :name, :email, :password, presence: true

	has_many :todos, dependent: :destroy
	has_many :tags, dependent: :destroy
end
