import React from "react"
import { connect } from "frontity"
import LeftSidebar from "../common/leftSidebar"
import PostContent from "./postContent"
import RightSidebar from "../common/rightSidebar"
import MostViewedPosts from "../common/mostViewedPosts"
import { PostDetailContainer } from "../../styles/post"

const Post = ({ state }) => {  
  return (
    <>
      <PostDetailContainer>
        <LeftSidebar />
        <PostContent />
        <RightSidebar />
      </PostDetailContainer>
      <div>
        <MostViewedPosts />
      </div>
    </>
  )
}

export default connect(Post)
