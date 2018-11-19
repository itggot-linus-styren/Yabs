Feature: Testing vue application


    Scenario: Routing to vue application and finding information
        Given I am on the vue application
        When I see "Start"
        Then I should find "Hitta"