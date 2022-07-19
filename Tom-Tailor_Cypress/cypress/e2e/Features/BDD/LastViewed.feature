Feature: Last Viewed Section

    Last Viewed section helps to move on recently visited blogs
    
    
    Scenario: Check for last viewed Section on home page and post page
    Given I have Landed on Blog HomePage
    And verify Recently Viewed section should not be present
    And Click on a post on Homepage and verify Last viewed section is not present on the blog post page
    And Back to HomePage
    And Verify Last Viewed section has recently viewed post underneath.
    |postName|
    |Learn How to Pre-render Pages Using Static Generation with Next.js|
    And Now click on another post on homepage and verify section viewed section on post page
    And Back to HomePage
    And Verify Recently viewed section has two post ordered with most recently viewed as First
    |postName|
    |James Webb Space Telescope|
    |Learn How to Pre-render Pages Using Static Generation with Next.js|
    And Now click on third new post on homepage and verify section viewed section on post page
    And Back to HomePage
    Then Verify Recently viewed section has three post ordered with most recently viewed as First and next one after another
    |postName|
    |Preview Mode for Static Generation|
    |James Webb Space Telescope|
    |Learn How to Pre-render Pages Using Static Generation with Next.js|




    
    
