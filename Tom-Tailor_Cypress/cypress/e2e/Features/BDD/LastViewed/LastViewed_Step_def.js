/// <reference types="Cypress" />
import BlogHomePage from '../../../../support/pageObjects/BlogHomePage'
import BlogPostPage from '../../../../support/pageObjects/BlogPostPage'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
const blogHomePage=new BlogHomePage()
const blogPostpage=new BlogPostPage()

Given('I have Landed on Blog HomePage',()=>
{ 
    blogHomePage.navigate() 
    
})

When('verify Recently Viewed section should not be present',()=>
{
    blogHomePage.recentlyViewedSection().should('not.exist')
})

And('Click on a post on Homepage and verify Last viewed section is not present on the blog post page',()=>{
    
    blogHomePage.clickOnPost1().click()
    blogPostpage.recentlyViewedSection().should('not.exist')
})

And('Back to HomePage',()=>
{
    blogHomePage.backtoBlogHome().click() 
})

And('Verify Last Viewed section has recently viewed post underneath.',function(dataTable){

    blogHomePage.recentViewedRow1sec1().should('contain',dataTable.rawTable[1][0])

})

And('Now click on another post on homepage and verify section viewed section on post page',()=>
{
    blogHomePage.clickOnPost2().click()
    blogPostpage.recentlyViewedSection().should('be.visible')
})
And('Verify Recently viewed section has two post ordered with most recently viewed as First',function(dataTable)
{
    blogHomePage.recentViewedRow1sec1().should('contain',dataTable.rawTable[1][0])
    blogHomePage.recentViewedRow1sec2().should('contain',dataTable.rawTable[2][0])  
})
And('Now click on third new post on homepage and verify section viewed section on post page',()=>
{
    blogHomePage.clickOnPost3().click()
    blogPostpage.recentlyViewedSection().should('be.visible')
})
Then('Verify Recently viewed section has three post ordered with most recently viewed as First and next one after another',function(dataTable)
{
    blogHomePage.recentViewedRow1sec1().should('contain',dataTable.rawTable[1][0])
    blogHomePage.recentViewedRow1sec2().should('contain',dataTable.rawTable[2][0])  
    blogHomePage.recentViewedRow2sec1().should('contain',dataTable.rawTable[3][0])
})