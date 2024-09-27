Feature: testing homepage

  @homepage
  Scenario: running test homepage
    Given user tap dictionary
    When user tap translate

  @testing
  Scenario: check all components present in tutur
    Given User in homepage
    When User tap dictionary
    Then User in dictionary page
