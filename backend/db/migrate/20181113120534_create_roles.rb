class CreateRoles < ActiveRecord::Migration[5.2]
  def change
    create_table :roles do |t|
      t.belongs_to :user, index: true
      t.string :title

      t.timestamps
    end
  end
end
