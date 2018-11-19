class ApplicationController < ActionController::Base
  include ReverseProxy::Controller

  if Rails.env.test?
    def show
      render file: "public/app.html"
    end
  else
    def show
      reverse_proxy "http://localhost:8080"
    end
  end
end
