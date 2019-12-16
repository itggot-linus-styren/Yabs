class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.references :title_id, foreign_key: {to_table: :titles}
      t.references :user, foreign_key: {to_table: :users}
      t.integer :score
      t.string :review

      t.timestamps
    end
  end
end

