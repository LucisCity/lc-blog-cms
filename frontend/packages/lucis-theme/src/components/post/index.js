import React from "react"
import { connect } from "frontity"
import PostContent from "./postContent"
import RightSidebar from "./sidebar/rightSidebar"
import { PostDetail, PostDetailContainer } from "../../styles/post"
import LeftSidebar from "./sidebar/leftSidebar"
import RelatedPostsFooter from "./relatedPostsFooter"

const Post = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  
  return (
    <>
      <PostDetailContainer>
        <PostDetail>
          <LeftSidebar />
          <PostContent
            post={post}
            author={author}
          />
        </PostDetail>
        <RightSidebar />
      </PostDetailContainer>
      <div>
        <RelatedPostsFooter />
      </div>
    </>
  )
}

export default connect(Post)
