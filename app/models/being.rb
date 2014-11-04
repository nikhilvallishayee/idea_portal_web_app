class Being < ActiveRecord::Base
  attr_accessible :email, :image_url, :link_facebook, :link_flickr, :link_twitter, :name, :phone, :short_description ,:photo,:user_id

  belongs_to :user

  has_attached_file :photo,
  	:url => "app/assets/images/beings/:id/:style/:basename/.:extension",
  	:path => ":rails_root/app/assets/images/beings/:id/:style/:basename/.:extension"
  
  validates_attachment_presence :photo
  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg','image/jpg', 'image/png']

  
end

