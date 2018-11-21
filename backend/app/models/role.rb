class Role < ApplicationRecord
  validates_uniqueness_of :user_id
end
