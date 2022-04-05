import React from "react"
import { LeftSidebarContainer } from "../../../styles/post"
import TableOfContents from "./tableOfContents"
import Keywords from "./keywords"

const LeftSidebar = () => {
  return (
    <LeftSidebarContainer className="bg-glow">
      <TableOfContents />
      <Keywords />
    </LeftSidebarContainer>
  )
}

export default LeftSidebar