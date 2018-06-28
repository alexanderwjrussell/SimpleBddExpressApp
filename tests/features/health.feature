Feature: 
    As an Energy team member
    I want to check the health of the service

Scenario: Doing a healthcheck
    When I GET /health
    Then response code should be 200

Scenario: I want to check the service name
    When I GET /health
    Then response body path $.serviceName should be simple-bdd-express-app

Scenario: I want to check if the service isOkay return true
    When I GET /health
    Then response body path $.isOkay should be true
