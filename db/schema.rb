# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20150618114337) do

  create_table "backend_users", :force => true do |t|
    t.string   "email"
    t.string   "display_name"
    t.string   "encrypted_password", :limit => 128
    t.string   "salt",               :limit => 128
    t.string   "confirmation_token", :limit => 128
    t.string   "remember_token",     :limit => 128
    t.string   "roles"
    t.datetime "created_at",                        :null => false
    t.datetime "updated_at",                        :null => false
  end

  create_table "beings", :force => true do |t|
    t.string   "name"
    t.text     "short_description"
    t.string   "email"
    t.string   "phone"
    t.string   "link_facebook"
    t.string   "link_twitter"
    t.string   "link_flickr"
    t.string   "image_url"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.boolean  "is_team_member"
    t.integer  "user_id"
    t.string   "password"
    t.string   "encrypted_password"
    t.string   "remember_token"
  end

  create_table "blogs", :force => true do |t|
    t.string   "title"
    t.text     "text"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "being_id"
  end

  create_table "comments", :force => true do |t|
    t.integer  "being_id"
    t.text     "body"
    t.integer  "blog_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "comments", ["being_id"], :name => "index_comments_on_being_id"
  add_index "comments", ["blog_id"], :name => "index_comments_on_blog_id"

end
