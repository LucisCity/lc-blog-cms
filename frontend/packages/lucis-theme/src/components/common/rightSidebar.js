import React from "react"
import { connect, styled } from "frontity"
import RelatedPosts from "./relatedPosts"
import SidebarCategory from "./sidebarCategory"
import { RightSidebarContainer } from "../../styles/post"

const RightSidebar = ({ state }) => {
  return (
    <RightSidebarContainer>
      <RelatedPosts />
      <SidebarCategory />
    </RightSidebarContainer>
  )
}

export default connect(RightSidebar)