Feature: Homepage features

  @init
  Scenario: click alert button
    Given user open app

  @homepage @checkComponentHomepage
  Scenario: user in homepage
    Given user in homepage

  @homepage @translateSIBI
  Scenario: translate SIBI
    Given user in homepage
    When hand landmark is active
    And user translate SIBI

  @homepage @replyText
  Scenario: reply SIBI with text
    Given user in homepage
    When reply button is present
    And user reply with text "<replyKeyword>"
    Then user should see reply "<replyKeyword>"

    Examples:
      | replyKeyword   |
      | halo apa kabar |

  @homepage @replyDictionary
  Scenario: reply SIBI with Gestures
    Given user in homepage
    When reply button is present
    And user reply with gesture "<replyKeyword>"
    Then user should see gesture results

    Examples:
      | replyKeyword |
      | apa          |

  @homepage @emptyRecords
  Scenario: record SIBI empty
    Given user in homepage
    When user click on memo page button
    Then user will not have memo

  @homepage @recordConversation
  Scenario: record SIBI conversation
    Given user in homepage
    When user click record button
    And user is in dialogue
    And user reply with text "<replyText>"
    Then user should see reply "<replyText>"
    And user save conversation "<memoTitle>"
    Then memo "<memoTitle>" will be present

    Examples:
      | memoTitle     | replyText  |
      | test record 1 | test reply |
