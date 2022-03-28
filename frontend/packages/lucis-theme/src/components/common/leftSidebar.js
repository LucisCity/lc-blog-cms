import React from "react"
import { connect } from "frontity"
import TableOfContents from "../post/tableOfContents"
import Keywords from "./keywords"
import { StickyAside } from "../../styles/common"

const LeftSidebar = ({ state }) => {
  return (
    <StickyAside className="left-sidebar">
      <TableOfContents />
      <Keywords />
    </StickyAside>
  )
}

export default connect(LeftSidebar)