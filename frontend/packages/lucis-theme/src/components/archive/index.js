import React from "react"
import { connect, decode } from "frontity"
import Link from "@frontity/components/link"
import { getPostsFromCategory } from "../../helpers"
import FeaturedImage from "../common/featuredImage"
import { Container } from "../../styles/common"

const Archive = ({ state }) => {
  const data = state.source.get(state.router.link)
  const category = state.source.category[data.id]
  const posts = getPostsFromCategory(state.source, category?.slug)
  console.log(category)
  return (
    <section>
      <Container>
        <h1 className="text-center">{category?.name}</h1>
        <div className="posts-grid">
          {posts.length ? posts.map((post) => {
            const featuredMediaId = parseInt(post.featured_media)
            return (
              <div className="post-item" key={post.id}>
                <Link link={post.link}>
                  <FeaturedImage id={featuredMediaId} />
                  <h4>{decode(post.title.rendered)}</h4>
                </Link>
              </div>
            )
          }) : <p>Chưa có bài viết</p>}
        </div>
      </Container>
    </section>
  )
}

export default connect(Archive)