import React from "react"
import { connect, css } from "frontity"
import dayjs from "dayjs"
import gutenbergStyle from "../../styles/gutenberg/style.css"
import gutenbergTheme from "../../styles/gutenberg/theme.css"
import { Author, PostContentContainer, PostInfo, PostDate } from "../../styles/post"
import { BoxRoundedBlur } from "../../styles/common"
import Image from "@frontity/components/image";

const PostContent = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const author = state.source.author[post.author]
  const formatedDate = dayjs(post.date).format('DD/MM/YYYY')
  const formatedTime = dayjs(post.date).format('H:mm')

  return (
    <PostContentContainer className="bgGlow">
      <BoxRoundedBlur padding="30px 40px">
        <h1>{post.title.rendered}</h1>
        <PostInfo>
          <Author>
            <Image src={author.avatar_urls[24]} />
            <span>
              {author.name}
            </span>
          </Author>
          <PostDate>
            <span>{formatedDate}</span>
            <span>{formatedTime}</span>
          </PostDate>
        </PostInfo>
        <p>
        </p>
        <div
          css={css`${gutenbergStyle}${gutenbergTheme}`}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </BoxRoundedBlur>
    </PostContentContainer>
  )
}

export default connect(PostContent)