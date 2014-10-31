class AddAttachmentPhotoToBeings < ActiveRecord::Migration
  def self.up
    change_table :beings do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :beings, :photo
  end
end
