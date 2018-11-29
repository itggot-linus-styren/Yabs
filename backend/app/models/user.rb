class User < ApplicationRecord
  self.primary_key = 'uid'
  has_one_attached :profile_image
end
