Feature: As a user I expect to be able to move smoothly through the case study section


Scenario: As a user I expect to be able to direct to Services page
    Given I am on the "home" page
    And I click the "Services-button" button
    And I click the "QAservices" button
    When I am directed to the "Services" page

@dev
Scenario Outline: As a user I can smoothly switch from the Services page to another page
  Given I am on the "Services" page
  And I click the <position> "Servicesproject" button
  When I am directed to the "<Destination>" page

Examples:
  | position | Destination |
  | 1st      | Functional Testing       |
  | 2nd      | Application Testing      |
  | 3rd      | Compability Testing      |
  | 4th      | Performance Testing      |
  | 5th      | Automation Testing       |








    
    

