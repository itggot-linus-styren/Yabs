class RenameLoansReturnAtToReturnedAt < ActiveRecord::Migration[5.2]
  def change
    rename_column :loans, :return_at, :returned_at
  end
end
