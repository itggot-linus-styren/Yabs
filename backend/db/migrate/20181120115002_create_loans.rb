class CreateLoans < ActiveRecord::Migration[5.2]
  def change
    create_table :loans do |t|
      t.references :loaned_by, foreign_key: {to_table: :users}
      t.references :lent_by, foreign_key: {to_table: :users}
      t.references :book, type: :string, foreign_key: true
      t.date :return_at

      t.timestamps
    end
  end
end
