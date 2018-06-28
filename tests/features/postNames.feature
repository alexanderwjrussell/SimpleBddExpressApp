Feature:
   As a service user
   I want to be able to see all names stored in the database

Scenario: Check response
    Given I save a valid name
    When I POST to /names
    Then response code should be 201

