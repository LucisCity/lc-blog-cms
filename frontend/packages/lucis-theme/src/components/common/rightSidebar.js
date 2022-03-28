import React from "react"
import { connect } from "frontity"
import RelatedPosts from "./relatedPosts"
import SidebarCategory from "./sidebarCategory"
import { StickyAside } from "../../styles/common"

const RightSidebar = ({ state }) => {
  return (
    <StickyAside className="right-sidebar">
      <RelatedPosts />
      <SidebarCategory />
    </StickyAside>
  )
}

export default connect(RightSidebar)