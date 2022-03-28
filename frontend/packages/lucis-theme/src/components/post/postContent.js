import React from "react"
import { connect, css } from "frontity"
import dayjs from "dayjs"
import gutenbergStyle from "../../styles/gutenberg/style.css"
import gutenbergTheme from "../../styles/gutenberg/theme.css"
import { PostContentContainer } from "../../styles/post"

const PostContent = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const formatedDate = dayjs(post.date).format("DD MMMM YYYY")

  return (
    <PostContentContainer>
      <h1>{post.title.rendered}</h1>
      <p>
        <strong>Posted: </strong>
        {formatedDate}
      </p>
      <p>
        <strong>Author: </strong>
        {author.name}
      </p>
      <div
        css={css`${gutenbergStyle}${gutenbergTheme}`}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </PostContentContainer>
  )
}

export default connect(PostContent)