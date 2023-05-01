# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

5.times do |i|
	User.create({name: "user#{i+1}", email: "test#{i+1}@example.com", password: "password"})
end

5.times do |i|
	3.times do |j|
		Todo.create({title: "title#{i+1}-#{j+1}", body: "body#{i+1}-#{j+1}", user_id: i+1})
	end
end

5.times do |i|
	3.times do |j|
		Tag.create({name: "tag#{i+1}-#{j+1}", user_id: i+1})
	end
end

5.times do |i|
	3.times do |j|
		TodoTag.create({todo_id: 3*i+(j+1), tag_id: (i+1)})
	end
end