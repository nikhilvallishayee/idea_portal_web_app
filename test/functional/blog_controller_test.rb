require 'test_helper'

class BlogControllerTest < ActionController::TestCase
  test "should get recentIndex" do
    get :recentIndex
    assert_response :success
  end

end
