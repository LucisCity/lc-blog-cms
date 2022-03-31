import React from "react"
import { connect } from "frontity"
import { BoxRoundedBlur } from "../../styles/common"

const Keywords = ({ state }) => {
  return (
    <BoxRoundedBlur padding="20px 30px">keywords</BoxRoundedBlur>
  )
}

export default connect(Keywords)