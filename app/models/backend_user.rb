class BackendUser < ActiveRecord::Base
  include Clearance::User
  attr_accessible :display_name,:email,:password,:roles
end
