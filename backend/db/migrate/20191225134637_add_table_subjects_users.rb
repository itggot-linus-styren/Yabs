class AddTableSubjectsUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :subjects_users do |t|

      t.timestamps
  end
end
