import React from "react"
import { connect } from "frontity"
import RelatedPosts from "./relatedPosts"
import SidebarCategory from "./sidebarCategory"
import { RightSidebarContainer } from "../../../styles/post"
import useDimension from "../../../hooks/useDimension"

const RightSidebar = ({ state }) => {
  const dimension = useDimension()
  return (
    <RightSidebarContainer>
      { dimension.width >= 992 ? (
        <>
          <RelatedPosts />
          <SidebarCategory />
        </>
      ) : null }
    </RightSidebarContainer>
  )
}

export default connect(RightSidebar)