class AddExpirationDateColumnToLoans < ActiveRecord::Migration[5.2]
  def change
    add_column :loans, :expiration_date, :date
  end
end
