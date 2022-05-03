# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Question.delete_all

udemo = User.create(:username => 'Demo', :email => 'demo@test.com', :password => 'demotester')
u1 = User.create(:username => 'tester1', :email => 'tester1@test.com', :password => 'tester1')
u2 = User.create(:username => 'tester2', :email => 'tester2@test.com', :password => 'tester2')
u3 = User.create(:username => 'tester3', :email => 'tester3@test.com', :password => 'tester3')

Question.create(:title => 'I am a test post', :body => 'Test post made by Demo User', :author_id => udemo.id, :num_likes => 0)
Question.create(title: 'I am another test post', body: 'Test post made by tester1', author_id: u1.id, num_likes: 0)
