class RenameBooksStatusToCondition < ActiveRecord::Migration[6.0]
  def change
    rename_column :books, :status, :condition
  end
end
