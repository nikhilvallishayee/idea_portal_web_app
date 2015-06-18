class CreateBackendUsers < ActiveRecord::Migration
  def self.up
    create_table :backend_users do |t|
      t.string :email
      t.string :display_name
      t.string :encrypted_password, :limit => 128
      t.string :salt, :limit => 128
      t.string :confirmation_token, :limit => 128
      t.string :remember_token, :limit => 128
      t.string :roles
      t.timestamps
    end
  end

  def self.down
    drop_table :backend_users
  end
end
