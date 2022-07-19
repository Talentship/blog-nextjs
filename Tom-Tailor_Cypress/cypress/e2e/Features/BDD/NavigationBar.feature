Feature: Navigation Bar

    Navigation Bar to navigate to different blogs available
    
    Scenario: Navigation Bar should be visible on home page and blog pages
    Given I have Landed on Blog HomePage
    When Verify navigation bar on home page
    And Click on a post on Homepage and move on Blog post page
    Then Verify navigation bar on Blog post page
    
    Scenario: Click on Naviagtion elememt on Navigation bar(Both single element and dropdown element)
    Given I have Landed on Blog HomePage
    When Try to click on single navigation element in navigation bar and verify it navigated to blog page
    Then  Try to click on blog from drop-down list and verify it navigated to blog page.

    