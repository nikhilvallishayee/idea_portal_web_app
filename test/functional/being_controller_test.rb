require 'test_helper'

class BeingControllerTest < ActionController::TestCase
  test "should get latestIndex" do
    get :latestIndex
    assert_response :success
  end

end
