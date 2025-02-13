Feature: Mission features
  # POSITIVE CASE

  @missionPage @login
  Scenario: User log in
    Given user in dictionary page
    When user clicks the learning button
    Then user log in with Google

  @missionPage
  Scenario: User enter mission page
    Given user in dictionary page
    When user clicks the learning button
    Then user will be in the mission page

  @missionPage @missionListPage
  Scenario: User enter mission list
    Given user in mission page
    When user clicks on easy level
    Then user will be on the mission list page
    And user go back to mission page

  @missionPage @missionListPage @doMissionEasy
  Scenario: User do an easy mission
    Given user in mission page
    When user clicks on easy level
    And user pick the top level
    Then user should see content preview
    And user should translate the targeted words
    And user progress should be saved

  @missionPage @missionListPage @doMissionEasy
  Scenario: User log out
    Given user in mission page
    When user clicks on logout button
    Then user will be logged out
  # NEGATIVE CASE

  @missionPageNegative @noInternet
  Scenario: User wants to access mission page but have no internet
    Given user in dictionary page
    When user clicks the learning button
    And user log in with Google with no internet
    Then user will go back to dictionary page

  @missionPageNegative @timerRunOut
  Scenario: User timer runs out
    Given user in dictionary page
    When user clicks the learning button
    Then user log in with Google
    When user clicks the learning button
    Given user in mission page
    When user clicks on easy level
    And user pick the top level
    Then user should see content preview
    And user run out of time when translating
    Then user exit mission