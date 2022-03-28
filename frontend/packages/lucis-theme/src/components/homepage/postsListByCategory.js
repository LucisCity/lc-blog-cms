import React from "react"
import { connect, decode } from "frontity"
import Link from "@frontity/components/link"
import { getPostsFromCategory } from "../../helpers"
import FeaturedImage from "../common/featuredImage"

const PostsListByCategory = ({ state, categorySlug, title }) => {
  const posts = getPostsFromCategory(state.source, categorySlug)

  return (
    <>
      {
        posts.length ? (
          <section>
            <h2 className="text-center">{title}</h2>
            <div className="posts-grid">
              {posts.map((post) => {
                const featuredMediaId = parseInt(post.featured_media)
                return (
                  <div className="post-item" key={post.id}>
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

export default connect(PostsListByCategory)