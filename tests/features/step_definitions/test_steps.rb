require 'byebug'

Given("I am on site") do
    visit("/")
end

When("I am on index") do
    visit("http://localhost:8000")
end

Then("I should see {string}") do |string|
    assert page.has_content? string
end
