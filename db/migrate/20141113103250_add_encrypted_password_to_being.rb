class AddEncryptedPasswordToBeing < ActiveRecord::Migration
  def change
    add_column :beings, :encrypted_password, :string
  end
end
