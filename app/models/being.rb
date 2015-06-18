class Being < ActiveRecord::Base
  # include Clearance::User
  attr_accessible :email, :password, :image_url, :link_facebook, :link_flickr, :link_twitter, :name, :phone, :short_description ,:photo,:user_id


  has_many :blogs
  has_many :comments


  # has_attached_file :photo,:styles => { :large => "100x100>" , :medium => "50x50>", :small => "20x20>" },
  #
  #   :url  => "/assets/images/beings/:id/:style/:basename.:extension",
  #   :path => ":rails_root/public/assets/images/beings/:id/:style/:basename.:extension"

  validates_presence_of :email, :name, :short_description 
  # validates_attachment_presence :photo
  # validates_attachment_size :photo, :less_than => 5.megabytes
  # validates_attachment_content_type :photo, :content_type => ['image/jpeg','image/jpg', 'image/png']

   # def photo_url
   #      photo.url(:original)
   # end
end

