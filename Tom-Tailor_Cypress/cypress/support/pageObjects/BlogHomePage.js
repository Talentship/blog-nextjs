class BlogHomePage
{
     
    navigate()
    {
        cy.visit("https://blog-talentship.netlify.app")
    }
    recentlyViewedSection()
    {
        return cy.findAllByText('Recently Viewed')
    }
    clickOnPost1()
    {
       return cy.findAllByText('Learn How to Pre-render Pages Using Static Generation with Next.js') 
    }
    clickOnPost2()
    {
       return cy.findAllByText('James Webb Space Telescope') 
    }
    clickOnPost3()
    {
       return cy.findAllByText('Preview Mode for Static Generation') 
    }

    backtoBlogHome()
    {
        return cy.get('[class="hover:underline"][href="/"]')
    }
    
    recentViewedRow1sec1()
    {

        return cy.get('[data-id="0"]')

    }

    recentViewedRow1sec2()
    {

        return cy.get('[data-id="1"]')

    }

    recentViewedRow2sec1()
    {

        return cy.get('[data-id="2"]')

    }

    recentViewedRow2sec2()
    {

        return cy.get('[data-id="2"]')

    }

    
}
export default BlogHomePage;