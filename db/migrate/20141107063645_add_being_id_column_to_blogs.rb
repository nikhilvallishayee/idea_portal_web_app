class AddBeingIdColumnToBlogs < ActiveRecord::Migration
  def change
    add_column :blogs, :being_id, :integer
  end
end
