class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.references :title, foreign_key: true
      t.string :barcode
      t.string :status

      t.timestamps
    end
  end
end
