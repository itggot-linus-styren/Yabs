class Loan < ApplicationRecord
  belongs_to :lent_by, class_name: 'User'
  belongs_to :loaned_by, class_name: 'User'
  belongs_to :book

  validates_uniqueness_of :book_id

  def as_json(options)
    super(:include => [:lent_by, :loaned_by, book: {include: :title}])
  end
end
