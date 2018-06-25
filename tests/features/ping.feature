Feature:
  As an Energy team member
  I want to verify that the service is reachable

  Scenario: Doing a ping
    When I GET /private/ping
    Then response code should be 200

  Scenario: Checking content-type
    When I GET /private/ping
    Then response header content-type should be text/html; charset=utf-8

  Scenario: Return a pong
    When I GET /private/ping
    Then response body should contain pong
