class Subject < ApplicationRecord
    has_many :titles
    has_many :books, through: :titles # No touchy here either
end
