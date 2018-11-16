require 'open-uri'

class DataFetchJob < ApplicationJob
  queue_as :default

  def perform(*fetch)
    url = "https://jsonplaceholder.typicode.com/users"
    data = JSON.parse(open(url).read)
    data.each do |person|
      if @user = User.find_by(google_token: person["phone"])
        @user.update(name: person["name"], email: person["email"], google_token: person["phone"])
      else 
        User.create(name: person["name"], email: person["email"], google_token: person["phone"])
      end
    end
    DataFetchJob.set(wait: 10.minutes).perform_later []
  end
end
