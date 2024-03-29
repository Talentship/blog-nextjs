import PostPreview from './post-preview'
import Post from '../types/post'

type Props = {
  posts: Post[]
}

const LastViewed = ({ posts }: Props) => {
  return (
    <section className="container mx-auto px-5">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Recently Viewed
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post, index) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default LastViewed
