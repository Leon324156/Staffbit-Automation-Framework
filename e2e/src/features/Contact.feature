Feature: As a user I expect to be able to contact the company

  @smoke
  @regression
  Scenario: As a user I expect to be able to direct to contact page
    Given I am on the "home" page
    And I click the "kontakt" button
    When I am directed to the "contact" page


  
  @smoke
  @regression

  Scenario: As a user I expect to the contact form and all fields should be displayed
    Given I am on the "contact" page
    Then I scroll to the "Contact-form" input
    And the "namefield" should be displayed
    And the "emailfield" should be displayed
    And the "phonefield" should be displayed
    And the "messagefield" should be displayed
    And the "Sendbutton" should be displayed
    
  @smoke
  @regression

  Scenario: As a user I expect to sending the message after completing all fields correctly
    Given I am on the "contact" page
    Then I scroll to the "Contact-form" input
    And I fill in the "name" input with "Jacek"
    Then I fill in the "email" input with random "email"
    And I fill in the "phone" input with "333 222 111"
    Then I fill in the "message" input with "test message"
    And I click the "Sendbutton" button
    And the "success-status-bar" should be displayed
    Then I sleep "5" seconds

 
  @smoke
  @regression
  @dev
  Scenario Outline: As a user I expect validation for incorrect or missing fields
    Given I am on the "contact" page
    Then I scroll to the "Contact-form" input
    And I fill in the "name" input with "<name>"
    Then I fill in the "email" input with "<email>"
    And I fill in the "phone" input with "<phone>"
    Then I fill in the "message" input with "<message>"
    And I click the "Sendbutton" button
    And the "<success_status>" should not be displayed
    Then I sleep "5" seconds
    Examples:
      | name  | email         | phone       | message       | success_status          |
      | Jacek | Kloda         | 333 222 111 | test message  | success-status-bar      |
      |       | random email  | 333 222 111 | test message  | success-status-bar      |
      | Jacek | random email  |             | test message  | success-status-bar      |
      | Jacek | random email  | 333 222 111 |               | success-status-bar      |


  @smoke
  @regression

Scenario: Status bar should not be displayed after refreshing the contact page
    Given I am on the "contact" page
    Then I scroll to the "Contact-form" input
    And I fill in the "name" input with "Jacek"
    Then I fill in the "email" input with "Kloda@wp.pl"
    And I fill in the "phone" input with "333 222 111"
    Then I fill in the "message" input with "test message"
    And I click the "Sendbutton" button
    And the "success-status-bar" should be displayed
    Then I refresh the "contact" page
    And the "success-status-bar" should not be displayed


Scenario: Status bar should disappear less than 5 seconds after sending the message
    Given I am on the "contact" page
    Then I scroll to the "Contact-form" input
    And I fill in the "name" input with "Jacek"
    Then I fill in the "email" input with "Kloda@wp.pl"
    And I fill in the "phone" input with "333 222 111"
    Then I fill in the "message" input with "test message"
    And I click the "Sendbutton" button
    And the "success-status-bar" should be displayed
    And I wait for "5" seconds
    And the "success-status-bar" should not be displayed



  



