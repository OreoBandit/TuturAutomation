Feature: Memo page

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
      | memo-name      |
      | test record  1 |

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

  @memo @memoDetail
  Scenario: User go to memo detail
    Given user in the memo page
    When user click on the first item
    Then user is on memo detail
    And user has conversation in memoDetail

  @memo @memoDelete
  Scenario: User delete item in memopage
    Given user in the memo page
    And user has memo
    When user long press item
    And user choose delete
    And user select items "<items>"
    Then user deletes item

    Examples:
      | items |
      |     0 |

  @memoNegative @memoEmptyDelete
  Scenario: memo empty delete
    Given user in the memo page
    And user has memo
    When user long press item
    And user choose delete
    And user not select items
    Then memo should not be deleted

  @memoNegative @memoEmptyRename
  Scenario: memo empty rename
    Given user in the memo page
    And user has memo
    When user long press item
    And user choose rename
    And user input empty rename in item "<memo-name>"
    Then item should not be renamed

    Examples:
      | memo-name      |
      | test record  1 |
