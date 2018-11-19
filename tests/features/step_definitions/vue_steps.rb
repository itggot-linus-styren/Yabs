require 'byebug'

Given("I am on the vue application") do
    visit("/")
end

When("I see {string}") do |string|
    page.has_content? string
end

Then("I should find {string}") do |string|
    page.has_content? string
end