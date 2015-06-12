class AddPasswordToBeing < ActiveRecord::Migration
  def change
    add_column :beings, :password, :string
  end
end
