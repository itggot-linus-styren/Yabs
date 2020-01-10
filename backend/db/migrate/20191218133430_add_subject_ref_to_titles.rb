class AddSubjectRefToTitles < ActiveRecord::Migration[6.0]
  def change
    add_reference :titles, :subject, :class_name => 'Subject'
  end
end
