Feature: Testing vue application


    Scenario: Routing to vue application and finding information
        Given I am on the vue application
        When I look for About link
        And I click the About link
        Then I should find "Bootstrap Vue"