import React from "react"
import { connect } from "frontity"
import { BoxRoundedBlur } from "../../styles/common"

const SidebarCategory = ({ state }) => {
  return (
    <BoxRoundedBlur padding="20px 30px">SidebarCategory</BoxRoundedBlur>
  )
}

export default connect(SidebarCategory)