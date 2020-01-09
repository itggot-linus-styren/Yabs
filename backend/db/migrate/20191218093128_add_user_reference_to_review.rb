class AddUserReferenceToReview < ActiveRecord::Migration[6.0]
  def change
    add_reference :reviews, :user, type: :string, :class_name => 'User', :primary_key => 'uid'
  end
end
