Feature: Test all / REST services basics

  Scenario: API's JSON, header, etc should have right info, validity
  Given I set headers to
  | name              | value             |
  | Accept  | application/json |
    When I GET endoint
    Then response header meta should exist
    And response body should be valid json
    And response body prop: entries should not be empty
