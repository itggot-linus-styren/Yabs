class AddRefToReviews < ActiveRecord::Migration[6.0]
  def change
    add_reference :reviews, :titles, foreign_key: true
  end
end
