# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



title_alice = Title.create(name: "Alice in Wonderland", isbn: "97161949222", cost: 70, title_type: "Skönlitteratur")
title_lotr = Title.create(name: "The Fellowship of the Ring", isbn: "9780547928210", cost: 100, title_type: "Skönlitteratur")

title_cc = Title.create(name: "Clean Code", isbn: "9780132350884", cost: 300, title_type: "Kurslitteratur")
title_tomtens_jul = Title.create(name: "Tomtens jul", isbn: "9781999985462", cost: 60, title_type: "Kurslitteratur")




book_alice_id_1 = Faker::Number.number(digits: 4).to_s
book_alice_id_2 = Faker::Number.number(digits: 4).to_s
book_alice_id_3 = Faker::Number.number(digits: 4).to_s


book_alice = Book.create(barcode: book_alice_id_1, status: "Broken", title: title_alice)

loan = Loan.new(expiration_date: Date.current)
loan.lent_by = User.find_by_name('Daniel Berg')
loan.loaned_by = User.find_by_name('Alex Henryz')
loan.book = book
loan.save

title_alice.dump_fixture(append=false)
book_alice.dump_fixture(append=false)
loan_alice.dump_fixture(append=false)
loan_alice.lent_by.dump_fixture(append=false)
loan_alice.loaned_by.dump_fixture(append=true)

Book.create(barcode: book_id_2, status: "OK", title: title_alice).dump_fixture
Book.create(barcode: book_id_3, status: "OK", title: title_alice).dump_fixture
