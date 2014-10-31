class CreateBeings < ActiveRecord::Migration
  def change
    create_table :beings do |t|
      t.string :name
      t.text :short_description
      t.string :email
      t.string :phone
      t.string :link_facebook
      t.string :link_twitter
      t.string :link_flickr
      t.string :image_url

      t.timestamps
    end
  end
end
