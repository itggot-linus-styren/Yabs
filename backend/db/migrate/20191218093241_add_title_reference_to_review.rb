class AddTitleReferenceToReview < ActiveRecord::Migration[6.0]
  def change
    add_reference :reviews, :title, foreign_key: true
  end
end
