import React from "react"
import { connect } from "frontity"
import RelatedPosts from "./relatedPosts"
import { RightSidebarContainer } from "../../../styles/post"
import useDimension from "../../../hooks/useDimension"
import HotNews from "./hotNews"

const RightSidebar = ({ state }) => {
  const dimension = useDimension()
  return (
    <RightSidebarContainer className="bg-glow">
      { dimension.width >= 992 ? (
        <>
          <RelatedPosts />
          <HotNews />
        </>
      ) : null }
    </RightSidebarContainer>
  )
}

export default connect(RightSidebar)