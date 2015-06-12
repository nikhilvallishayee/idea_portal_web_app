class AddRemberTokenToBeing < ActiveRecord::Migration
  def change
    add_column :beings, :remember_token, :string
  end
end
