class Comment < ActiveRecord::Base
  belongs_to :being
  belongs_to :blog
  attr_accessible :body,:being_id,:blog_id
end
