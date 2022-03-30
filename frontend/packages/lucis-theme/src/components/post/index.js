import React from "react"
import { connect } from "frontity"
import PostContent from "./postContent"
import RightSidebar from "../common/rightSidebar"
import MostViewedPosts from "../common/mostViewedPosts"
import { PostDetail, PostDetailContainer } from "../../styles/post"
import LeftSidebar from "../common/leftSidebar"

const Post = ({ state }) => { 
  return (
    <>
      <PostDetailContainer>
        <PostDetail>
          <LeftSidebar />
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
