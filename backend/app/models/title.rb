class Title < ApplicationRecord
  has_many :books, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
