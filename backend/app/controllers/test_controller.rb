class TestController < ApplicationController

  def index 
    res = Test.all
    render json: res
  end
end
