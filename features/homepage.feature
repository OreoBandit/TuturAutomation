Feature: Homepage features

  @init
  Scenario: click alert button
    Given user open app

  @homepage @checkFrontCamera @checkHeaderFrontCamera
  Scenario: user in homepage and check functions while front camera active
    Given user in homepage
    Then header button should exist
    And header button is functioning while front camera active

  @homepage @checkBackCamera @checkHeaderBackCamera
  Scenario: user in homepage and check functions while back camera active
    Given user in homepage
    Then header button should exist
    And header button is functioning while back camera active

  @homepage @translateSIBI
  Scenario: translate SIBI
    Given user in homepage
    When hand landmark is active
    And user translate SIBI

  @homepage @translateSIBITTS
  Scenario: translate SIBI with TTS
    Given user in homepage
    When hand landmark is active
    And user translate SIBI with TTS

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

  @homepageNegative @unknownGestures
  Scenario: no gesture found
    Given user in homepage
    When hand landmark is active
    Then gesture is not recognized

  @homepageNegative @replyTextEmpty
  Scenario: empty reply text
    Given user in homepage
    When hand landmark is active
    And reply button is present
    Then user reply empty text

  @homepageNegative @replyGestureEmpty
  Scenario: empty reply gesture
    Given user in homepage
    When hand landmark is active
    And reply button is present
    Then user reply empty gesture

  @homepageNegative @emptyRecordTitle
  Scenario: empty record title
    Given user in homepage
    When user click record button
    When hand landmark is active
    And user translate SIBI
    And user save conversation ""
    Then record should not be saved

  @homepageNegative @nothingToRecord
  Scenario: nothing to record
    Given user in homepage
    When user click record button
    When hand landmark is active
    And reply button is present
    And user reply empty text
    And user finish recording
    When user click on memo page button
    Then user will not have memo
