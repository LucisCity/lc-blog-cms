import React from "react"
import { connect, loadable } from "frontity"
import { LeftSidebarContainer } from "../../../styles/post"
import useDimension from "../../../hooks/useDimension"
const TableOfContents = loadable(() => import("./tableOfContents"))
const Keywords = loadable(() => import("./keywords"))

const LeftSidebar = ({ state }) => {
  const dimension = useDimension()

  return (
    <LeftSidebarContainer className="bg-glow">
      { dimension.width >= 768 ? (
        <>
          <TableOfContents />
          <Keywords />
        </>
      ) : null }
    </LeftSidebarContainer>
  )
}

export default connect(LeftSidebar)