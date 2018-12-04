class ChangePrimaryKeyOnUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :uid, :integer, false

    #remove_index :users, :id
    remove_column :users, :id

    add_index :users, :uid, unique: true
  end
end
