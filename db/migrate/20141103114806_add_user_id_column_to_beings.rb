class AddUserIdColumnToBeings < ActiveRecord::Migration
  def change
    add_column :beings, :user_id, :integer
  end
end
