# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(uid: 19994523, name: "Rickard Svensson", google_token: "asfh3323jf", role: "Elev")
Role.create(user_id: user1.id, title: "Student")

user2 = User.create(uid: 19683241, name: "Linnea Kristensson", google_token: "asasf1223jf", role: "Lärare")


title = Title.create(name: "A book", isbn: "123-123", cost: 200)
title.type = "Skönlitteratur"
title.save

book = Book.create(barcode: "0000", status: "Broken")
book.title = title
book.save

loan = Loan.create(return_at: Date.current)
loan.lent_by = user2
loan.loaned_by = user1
loan.book = book
loan.save

