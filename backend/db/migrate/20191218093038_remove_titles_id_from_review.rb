class RemoveTitlesIdFromReview < ActiveRecord::Migration[6.0]
  def change
    remove_column :reviews, :titles_id
  end
end
