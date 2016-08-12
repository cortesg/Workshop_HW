require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get users_index_url
    assert_response :success
  end

  test "should get page2" do
    get users_page2_url
    assert_response :success
  end

  test "should get page3" do
    get users_page3_url
    assert_response :success
  end

end
