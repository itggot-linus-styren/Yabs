class User < ApplicationRecord
  self.primary_key = 'uid'

  has_one :role
end
