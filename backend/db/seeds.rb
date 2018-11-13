# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(uid: 19994523, name: "Rickard Svensson", google_token: "asfh3323jf")
role1 = Role.create(user_id: 1, title: "Student")
user2 = User.create(uid: 19683241, name: "Linnea Kristensson", google_token: "asasf1223jf")
role2 = Role.create(user_id: 2, title: "Teacher")


