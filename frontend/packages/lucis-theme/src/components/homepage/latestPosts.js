import React from "react"
import { connect, decode } from "frontity"
import Link from "@frontity/components/link"
import FeaturedImage from "../common/featuredImage"

const LatestPosts = ({ state }) => {
  const data = state.source.get(state.router.link)
  const posts = data.items
  
  return (
    <>
      {
        posts.length ? (
          <section>
            <h2 className="text-center">Bài viết mới nhất</h2>
            <div className="posts-grid">
              {posts.slice(0, 6).map((item) => {
                const post = state.source[item.type][item.id]
                const featuredMediaId = parseInt(post.featured_media)
                return (
                  <div className="post-item" key={item.id}>
                    <Link link={post.link}>
                      <FeaturedImage id={featuredMediaId} />
                      <h4>{decode(post.title.rendered)}</h4>
                    </Link>
                  </div>
                )
              })}
            </div>
          </section>
        ) : null
      }
    </>
  )
}

export default connect(LatestPosts)