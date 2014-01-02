Feature:
  As a Gamer who wants to play in an event
  I would like to be able to register and reserve a seat at the event

  Scenario Outline: Register for an event
    Given I am logged into my <account_type> account
    When I register for the event
    Then I should be able to see myself registered for the event
  Examples:
    | account_type |
    | Facebook |
    | Twitter |