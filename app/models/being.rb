class Being < ActiveRecord::Base

  attr_accessible :email, :image_url, :link_facebook, :link_flickr, :link_twitter, :name, :phone, :short_description ,:photo,:user_id

  belongs_to :user
  has_many :blogs

  has_attached_file :photo,:styles => { :large => "100x100>" , :medium => "50x50>", :small => "20x20>" }
  	#write code to store images in app/assets/images/beings/
  validates_presence_of :email, :name, :short_description
  validates_attachment_presence :photo
  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg','image/jpg', 'image/png']

   def photo_url
        photo.url(:original)
   end
end

