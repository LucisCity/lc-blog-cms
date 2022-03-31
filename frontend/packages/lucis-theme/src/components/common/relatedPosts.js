import React from "react"
import { connect } from "frontity"
import { BoxRoundedBlur } from "../../styles/common"

const RelatedPosts = ({ state }) => {
  return (
    <BoxRoundedBlur padding="20px 30px">RelatedPosts</BoxRoundedBlur>
  )
}

export default connect(RelatedPosts)