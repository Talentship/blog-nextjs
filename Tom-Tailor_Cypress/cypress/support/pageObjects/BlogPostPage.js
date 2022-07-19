class BlogPostPage
{
    
  recentlyViewedSection()
  {
    return cy.findAllByText('Recently Viewed')
  }
}
    
    export default BlogPostPage;