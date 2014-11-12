class Blog < ActiveRecord::Base
  attr_accessible :text, :title, :being_id
  belongs_to :being

  validates_presence_of :title ,:text, :being_id
end
