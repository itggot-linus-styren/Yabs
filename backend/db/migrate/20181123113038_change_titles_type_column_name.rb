class ChangeTitlesTypeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :titles, :type, :title_type
  end
end
