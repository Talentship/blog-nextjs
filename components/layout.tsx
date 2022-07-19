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
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>([]);

  useEffect(() => {
    const posts = localStorage.getItem('viewedPost');
    posts && setRecentlyViewed(JSON.parse(posts));
  }, []);

  const latestViewed = allPosts.filter(post => recentlyViewed.includes(post.slug));

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      {latestViewed.length > 0 && <LastViewed posts={latestViewed} />}
      <Footer />
    </>
  )
}

export default Layout
