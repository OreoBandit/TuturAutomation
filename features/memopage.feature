Feature: testing memopage

  @memo @memofilter
  Scenario: User go to memopage
    Given user on homepage
    When user tap memo button
    Then user in memo

  @memo @memofilter
  Scenario: User filter in memopage
    Given user in the memo page
    And user has memo
    When user search for memo "<memo-name>"
    Then user will see memo with title "<memo-name>"

    Examples:
      | memo-name              |
      | Interview with Hanni   |
      | Interview with Hanni 2 |

  @memo @memoRename
  Scenario: User rename item in memopage
    Given user in the memo page
    And user has memo
    When user long press item
    And user choose rename
    And user rename item "<new-name>"
    Then user "<new-name>" item will be present

    Examples:
      | new-name         |
      | renamed new item |

  @memo @memoDelete
  Scenario: User delete item in memopage
    Given user in the memo page
    And user has memo
    When user long press item
    And user choose delete
    And user select items "<items>"
    # Then user deletes item

    Examples:
      | items |
      |     0 |
      |     1 |
      |     2 |

  @memo
  Scenario: User go to memo detail
    Given user in the memo page
    When user click on the first item
    Then user is on memo detail
