import React from "react"
import { connect, loadable } from "frontity"
import PostContent from "./postContent"
import RightSidebar from "../common/rightSidebar"
import MostViewedPosts from "../common/mostViewedPosts"
import { PostDetail, PostDetailContainer } from "../../styles/post"
import useDimension from "../../hooks/useDimension"
const LeftSidebar = loadable(() => import('../common/leftSidebar'))

const Post = ({ state }) => { 
  const dimension = useDimension()

  return (
    <>
      <PostDetailContainer>
        <PostDetail>
          {dimension.width >= 768 ? <LeftSidebar /> : null}
          <PostContent />
        </PostDetail>
        <RightSidebar />
      </PostDetailContainer>
      <div>
        <MostViewedPosts />
      </div>
    </>
  )
}

export default connect(Post)
