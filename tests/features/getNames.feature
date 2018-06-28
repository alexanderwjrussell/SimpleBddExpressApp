Feature:
   As a service user
   I want to be able to see all names stored in the database

Scenario: Check response
    When I GET /names
    Then response code should be 200

Scenario: Should return a named database model
    When I GET /names
    Then response body path $.model should be null
