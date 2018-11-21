class CreateTitles < ActiveRecord::Migration[5.2]
  def change
    create_table :titles do |t|
      t.string :name
      t.string :isbn
      t.integer :cost
      t.string :type

      t.timestamps
    end
  end
end
