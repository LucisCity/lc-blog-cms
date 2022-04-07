import React from "react"
import { css, decode } from "frontity"
import dayjs from "dayjs"
import gutenbergStyle from "../../styles/gutenberg/style.css"
import gutenbergTheme from "../../styles/gutenberg/theme.css"
import { Author, PostContentContainer, PostInfo, PostDate } from "../../styles/post"
import { BoxRoundedBlur } from "../../styles/common"
import Image from "@frontity/components/image";

const PostContent = ({ post, author }) => {
  const formatedDate = dayjs(post.date).format('DD/MM/YYYY')
  const formatedTime = dayjs(post.date).format('H:mm')

  return (
    <PostContentContainer className="bg-glow" id="post-content">
      <BoxRoundedBlur padding="30px 40px">
        <h1>{decode(post.title.rendered)}</h1>
        <PostInfo>
          <Author>
            <Image src={author?.avatar_urls[24]} />
            <span>
              {author?.name}
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

export default PostContent