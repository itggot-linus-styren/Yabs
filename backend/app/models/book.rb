class Book < ApplicationRecord
  belongs_to :title
  has_many :loans, dependent: :destroy
end
