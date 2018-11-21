require 'google/apis/admin_directory_v1'
require 'googleauth'

class DataFetchJob < ApplicationJob
  queue_as :default

  def perform(*fetch)
    scopes =  ['https://www.googleapis.com/auth/admin.directory.group.readonly','https://www.googleapis.com/auth/admin.directory.user.readonly']
    client = GoogleApiClient.new(Google::Apis::AdminDirectoryV1::DirectoryService, scopes, Rails.application.secrets.google_client_secrets, 'johanneberg.laneservice@ga.ntig.se')
    data = client.service.list_users(domain: 'ga.ntig.se', query: "orgUnitPath='/Johanneberg'", max_results: 500)
    insertdata(data.users)
    data = client.service.list_users(domain: 'elev.ga.ntig.se', query: "orgUnitPath='/Johanneberg'", max_results: 500)
    insertdata(data.users)
    while data.next_page_token != nil
      data = client.service.list_users(domain: 'elev.ga.ntig.se', page_token: data.next_page_token, query: "orgUnitPath='/Johanneberg'")
      insertdata(data.users)
    end
    DataFetchJob.set(wait: 24.hours).perform_later
  end

  def insertdata(users)
     users.each do |person|
      uid = Time.new.year.to_s[2..-1] + person.id.to_str[13..-1]
      if person.org_unit_path == "/Johanneberg/Personal"
        role = "Lärare"
      else
        role = "Elev"
      end
      if @user = User.find_by(google_token: person.id)
        @user.update(name: person.name.full_name, uid: uid, email: person.emails[0]["address"], role: role, google_token: person.id)
      else 
        User.create(name: person.name.full_name, uid: uid, email: person.emails[0]["address"], role: role, google_token: person.id)
      end
    end
  end
end
