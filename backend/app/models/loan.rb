class Loan < ApplicationRecord
  belongs_to :lent_by, class_name: 'User'
  belongs_to :loaned_by, class_name: 'User'
  belongs_to :book

  validates_uniqueness_of :book_id
end
