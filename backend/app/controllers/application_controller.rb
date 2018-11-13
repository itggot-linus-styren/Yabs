class ApplicationController < ActionController::Base
  include ReverseProxy::Controller

  def show
    reverse_proxy "http://localhost:8080"
  end
end
