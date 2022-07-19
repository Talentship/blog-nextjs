# Tom Tailor Code Challenge - Blog Starter

This challenge showcases the statically generated [blog example](https://github.com/vercel/next.js/tree/canary/examples/blog-starter-typescript) using Next.js, Markdown, and TypeScript.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Job Stories

### Last viewed post

**When** I'm navigating through our posts,
**I want to** have a list of my last viewed posts at the end of the page,
**so I can** get back to one of my last viewed posts.

#### Acceptance Criteria

* A new component should be placed at the end of each page (Home and post pages)
* The component should have the same layout as the `MoreStories` component.
* The component should present all my last viewed posts.
* If I haven't viewed any posts yet, the component should be hidden.

---

### Navigation

**When** I'm in our blog,
**I want to** have a navigation component at the head of our pages,
**so I can** navigate through all our posts.

#### Acceptance Criteria

* A new navigation component should replace the header component through all blog pages.
* The new navigation layout should follow the current blog theme.
* The navigation elements should contain the posts title.
  * The navigation elements should have a max of 10 characters. If it overrides the amount, three dots "..." must replace the leftover text.
* A dropdown element should be created to each folder in `\_posts`.
  * All posts inside a second level folder should be ignored (e.g. `\_posts\first_folder\second_folder\`).
* The navigation component must always have only one row/line.
  * If the amount of navigation elements overrides the width of the user viewport, a new first level dropdown component containing three dots "..." should be placed at the end of the navigation containing all leftover elements.
    * If a dropdown element is in the leftover list, a second level dropdown element should be presented.
* A burger menu based navigation should replace the desktop navigation for all devices with width smaller than 768px.

# Notes

This blog-starter uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
