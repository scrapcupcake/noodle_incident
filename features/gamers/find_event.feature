Feature:
  As a Gamer looking for an event
  I would like to be able to find gaming events going on near me or near a location I specify

  Scenario: Find by provided Location
    Given I am on the homepage
    When I enter my zip/postal code
    Then gaming events within 15 miles of the location should be presented
    And the events should be listed chronologically

  Scenario: Find near me
    Given I am on the homepage
    And I have Location Services allowed
    Then gaming events within 15 miles of the location should be presented
    And the events should be listed chronologically
