/// <reference types="Cypress" />
import TAPHomePage from '../../../../support/pageObjects/TAPHomePage'
import TAPLoginPage from '../../../../support/pageObjects/TAPLoginPage'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
const tapLoginPage=new TAPLoginPage()
const tapHomePage=new TAPHomePage()

Given('I Landed on Tap login page',()=>
{ 
    tapLoginPage.navigate() 
    
})

When('Enter email',function(dataTable){
    tapLoginPage.getEnterEmail().type(dataTable.rawTable[1][0],{force: true}) 
})

And('Enter password',function(dataTable){
    tapLoginPage.getEnterpassword().type(dataTable.rawTable[1][0],{force: true})
    
})

And('Logged in to TAP portal',()=>
{
    Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  tapLoginPage.getSignInButton().click({force: true})
})

When('Verify SignIn page Header',()=>{

    tapLoginPage.getLoginPageHeader().should('contain','Sign in')

})

Then('Verify Email,password and SignIn Button present',()=>
{
    tapLoginPage.getEnterEmail()
    tapLoginPage.getEnterpassword()
    tapLoginPage.getSignInButton()
}
)

Then('On HomePage Now',()=>
 {
    tapHomePage.navigate()     
 })
 
