class Being < ActiveRecord::Base
  attr_accessible :email, :image_url, :link_facebook, :link_flickr, :link_twitter, :name, :phone, :short_description ,:photo

  has_attached_file :photo ,:styles => { :small =>"150x150>"},
  	:url => "/assets/images/beings/:id/:style/:basename/.:extension",
  	:path => ":rails_root/public/assets/images/beings/:id/:style/:basename/.:extension"
  
  validates_attachment_presence :photo
  validates_attachment_size :photo, :less_than => 5.megabytes
  validates_attachment_content_type :photo, :content_type => ['image/jpeg', 'image/png']
end

