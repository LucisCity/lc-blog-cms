import React from "react"
import { connect } from "frontity"
import TableOfContents from "../post/tableOfContents"
import Keywords from "./keywords"
import { LeftSidebarContainer } from "../../styles/post"

const LeftSidebar = ({ state }) => {
  return (
    <LeftSidebarContainer>
      <TableOfContents />
      <Keywords />
    </LeftSidebarContainer>
  )
}

export default connect(LeftSidebar)