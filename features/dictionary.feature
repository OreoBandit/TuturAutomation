Feature: Dictionary page

  @dictionary @searchDictionary @errorDictionary
  Scenario: User go to dictionary
    Given user in homepage
    When user tap dictionary
    Then user in dictionary page

  @dictionary @searchDictionary
  Scenario: User search dictionary
    Given user in dictionary page
    When user search "<keyword>"
    Then user will see "<keyword>" displayed in results

    Examples:
      | keyword |
      | Saya    |

  @dictionary @errorDictionary1
  Scenario: User search keyword not found
    Given user in dictionary page
    When user search "<keyword>"
    Then app will display unable to show error "<keyword>"

    Examples:
      | keyword |
      | Blabla  |
