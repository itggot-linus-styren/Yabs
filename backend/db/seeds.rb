# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# Create titles of both book types
title_alice = Title.create(name: "Alice in Wonderland", isbn: "97161949222", cost: 70, title_type: "Skönlitteratur")
title_lotr = Title.create(name: "The Fellowship of the Ring", isbn: "9780547928210", cost: 100, title_type: "Skönlitteratur")

title_cc = Title.create(name: "Clean Code", isbn: "9780132350884", cost: 300, title_type: "Kurslitteratur")
title_tomtens_jul = Title.create(name: "Tomtens jul", isbn: "9781999985462", cost: 60, title_type: "Kurslitteratur")

# Create books to be loaned
book_alice = Book.create(barcode: 5000, status: "OK", title: title_alice)
book_cc = Book.create(barcode: 1001, status: "OK", title: title_cc)

# Create a loan
loan_alice = Loan.new(expiration_date: Date.current)
loan_alice.lent_by = User.find_by_name("Låneservice Johanneberg")
loan_alice.loaned_by = User.find_by_name("Alex Henryz")
loan_alice.book = book_alice
loan_alice.save

# Create the rest of the books
Book.create(barcode: 5002, status: "Broken", title: title_alice).dump_fixture
Book.create(barcode: 5003, status: "OK", title: title_alice).dump_fixture
Book.create(barcode: 5004, status: "OK", title: title_lotr).dump_fixture
Book.create(barcode: 5005, status: "Broken", title: title_lotr).dump_fixture
Book.create(barcode: 5006, status: "OK", title: title_cc).dump_fixture
Book.create(barcode: 5007, status: "OK", title: title_tomtens_jul).dump_fixture
Book.create(barcode: 5008, status: "OK", title: title_tomtens_jul).dump_fixture

# Create fixtures for testing 
title_alice.dump_fixture(append=false)
book_alice.dump_fixture(append=false)
loan_alice.dump_fixture(append=false)
loan_alice.lent_by.dump_fixture(append=false)
loan_alice.loaned_by.dump_fixture(append=true)



