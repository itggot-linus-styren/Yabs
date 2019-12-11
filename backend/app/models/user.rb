class User < ApplicationRecord
  self.primary_key = 'uid'
  has_one_attached :profile_image

  def principal?
    self.role & 32 == 32
  end

  def admin?
    # self[:role] == "Lärare" # || self[:uid] == 1866996084
    self.role & 16 == 16
  end

  def caretaker?
    self.role & 8 == 8
  end

  def teacher?
    self.role & 4 == 4
  end

  def eht?
    self.role & 2 == 2
  end

  def student?
    self.role & 1 == 1
  end

end
