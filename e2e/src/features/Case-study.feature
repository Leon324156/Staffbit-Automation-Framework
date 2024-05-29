Feature: As a user I expect to be able to move smoothly through the case study section

  Scenario: As a user I expect to be able to direct to case study page
    Given I am on the "home" page
    And I click the "Case-study-button" button
    And I click the "overwiew" button
    When I am directed to the "case study" page


Scenario Outline: As a user I can smoothly switch from the case study page to <Destination> page
  Given I am on the "case study" page
  And I click the "<CardName>" button
  When I am directed to the "<Destination>" page

Examples:
  | Destination                 | CardName                     |
  | Quality-quickstard-quest    | Quality-Quickstar-Quest-Card |
  | Scale-Secure-Symphony       | Scale-Secure-Symphony-Card    |
  | Total-Tech-Triumph-Track    | Total-Tech-Triumph-Track-Card |
  | Cto-Pub                     | Cto-Pub-Card                 |







    
    

