require 'open-uri'

class DataFetchJob < ApplicationJob
  queue_as :default

  def perform(*fetch)
    url = "https://jsonplaceholder.typicode.com/users"
    data = JSON.parse(open(url).read)
    puts data
    DataFetchJob.set(wait: 10.minutes).perform_later []
  end
end
