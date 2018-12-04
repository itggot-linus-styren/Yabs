class Book < ApplicationRecord
  self.primary_key = 'barcode'
  belongs_to :title
  has_many :loans, dependent: :destroy
end
