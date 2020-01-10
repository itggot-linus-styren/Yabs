class CreateResponsibilities < ActiveRecord::Migration[6.0]
  def change
    create_table :responsibilities do |t|
      t.references :subject
      t.references :user
      
      t.timestamps
    end
  end
end
