Feature:
  As a Gamer registered for some gaming events
  I would like to see all of the events I am registered for

  Scenario: My Events
    Given I am am registered for some events
    When I view my events
    Then I should see all of the events I am registered for
    And I should be able to unregister from the events