# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Clears tables before inputing new data
Title.delete_all
Book.delete_all
Loan.delete_all

# Create titles of both types
title_alice = Title.create(name: "Alice in Wonderland", isbn: "97161949222", cost: 70, title_type: "Skönlitteratur")
title_lotr = Title.create(name: "The Fellowship of the Ring", isbn: "9780547928210", cost: 100, title_type: "Skönlitteratur")

title_cc = Title.create(name: "Clean Code", isbn: "9780132350884", cost: 300, title_type: "Kurslitteratur")
title_tomtens_jul = Title.create(name: "Tomtens jul", isbn: "9781999985462", cost: 60, title_type: "Kurslitteratur")

# Generate faker id's for all books
book_alice_id_1 = Faker::Number.number(digits: 4).to_s
book_alice_id_2 = Faker::Number.number(digits: 4).to_s
book_alice_id_3 = Faker::Number.number(digits: 4).to_s
book_lotr_id_1 = Faker::Number.number(digits: 4).to_s
book_lotr_id_2 = Faker::Number.number(digits: 4).to_s
book_cc_id_1 = Faker::Number.number(digits: 4).to_s
book_cc_id_2 = Faker::Number.number(digits: 4).to_s
book_tomtens_jul_id_1 = Faker::Number.number(digits: 4).to_s
book_tomtens_jul_id_2 = Faker::Number.number(digits: 4).to_s

# Create books to be loaned
book_cc = Book.create(barcode: book_cc_id_1, status: "OK", title: title_cc)
book_alice = Book.create(barcode: book_alice_id_1, status: "OK", title: title_alice)

loan_alice = Loan.new(expiration_date: Date.current)
loan_alice.lent_by = User.find_by_name('Låneservice Johanneberg')
loan_alice.loaned_by = User.find_by_name('Alex Henryz')
loan_alice.book = book_alice
loan_alice.save

loan_cc = Loan.new(expiration_date: Date.current)
loan_cc.lent_by = User.find_by_name('Daniel Berg')
loan_cc.loaned_by = User.find_by_name('Emil Babayev')
loan_cc.book = book_cc
loan_cc.save

# Create the rest of the books
Book.create(barcode: book_alice_id_2, status: "Broken", title: title_alice).dump_fixture
Book.create(barcode: book_alice_id_3, status: "OK", title: title_alice).dump_fixture
Book.create(barcode: book_lotr_id_1, status: "OK", title: title_lotr).dump_fixture
Book.create(barcode: book_lotr_id_2, status: "Broken", title: title_lotr).dump_fixture
Book.create(barcode: book_cc_id_2, status: "OK", title: title_cc).dump_fixture
Book.create(barcode: book_tomtens_jul_id_1, status: "OK", title: title_tomtens_jul).dump_fixture
Book.create(barcode: book_tomtens_jul_id_2, status: "OK", title: title_tomtens_jul).dump_fixture

# Create fixtures for testing 
title_alice.dump_fixture(append=false)
title_lotr.dump_fixture(append=false)
title_cc.dump_fixture(append=false)
title_tomtens_jul.dump_fixture(append=false)
book_alice.dump_fixture(append=false)
book_cc.dump_fixture(append=false)
loan_alice.dump_fixture(append=false)
loan_alice.lent_by.dump_fixture(append=false)
loan_alice.loaned_by.dump_fixture(append=true)
loan_cc.dump_fixture(append=false)
loan_cc.lent_by.dump_fixture(append=false)
loan_cc.loaned_by.dump_fixture(append=true)


