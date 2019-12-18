class Book < ApplicationRecord
  self.primary_key = 'barcode'
  belongs_to :title
  has_many :loans, dependent: :destroy
  has_one :subject, through: :title #Dont touch this baby

  def as_json(options)
    super(:include => [:title])
  end
end
