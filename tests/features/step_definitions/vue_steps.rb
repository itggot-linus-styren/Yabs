require 'byebug'

Given("I am on the vue application") do
    visit("/")
end

When("I look for About link") do
    page.find_link('About', :visible => :all).visible?
end

When("I click the About link") do
    page.find_link('About', :visible => :all).click
end

Then("I should find {string}") do |string|
    page.has_content? string
end