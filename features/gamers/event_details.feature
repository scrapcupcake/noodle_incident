Feature:
  As a Gamer
  I would like to see relevant details of the event

  Scenario: Event Search Summary
    Given I have an event I want to see
    When I see it as a search result
    Then I should see the event name
    And the date and time the event starts
    And expected end time
    And the venue's friendly name
    And the number of seats available
    And the organizer's event description
    And a google maps link for the venue
    And I should be able to register for the event


 Scenario: Event Details
   Given I have an event I want to see
   When I expand its details
   Then I should see the event summary details
   And the venue's address
   And who is already registered for the event


 Scenario: Unregister
   Given I am registered for an event
   And I have the event in my search results
   Then I should see an Unregister button
   And not see the Register button
   When I Unregister
   Then I should not see myself in the list of people registered for the event
   And I should see the Register button