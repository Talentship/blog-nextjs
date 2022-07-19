import { useEffect, useState } from 'react'
import PostType from '../types/post'
import Alert from './alert'
import Footer from './footer'
import LastViewed from './last-viewed'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
  allPosts: PostType[]
}

const Layout = ({ preview, children, allPosts}: Props) => { 
  const [recentlyViewed, setRecentlyViewed] = useState<PostType[]>([]);

  useEffect(() => {
    const localViewedPost = localStorage.getItem('viewedPost');
    const posts: string[] = localViewedPost && JSON.parse(localViewedPost);
    let lastViewed: PostType[] = [];

    posts?.length > 0 && posts.map(data => {
        const post = allPosts.find(elem => {
          if(elem.slug == data)
            return elem;
        });
        post && lastViewed.push(post);
    })
    setRecentlyViewed(lastViewed);
  }, [allPosts]);

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      {recentlyViewed.length > 0 && <LastViewed posts={recentlyViewed} />}
      <Footer />
    </>
  )
}

export default Layout
