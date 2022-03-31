import React from "react"
import { connect, styled, decode } from "frontity"
import { BoxRoundedBlur } from "../../../styles/common"
import Link from "@frontity/components/link"
import { getPostsFromCategory } from "../../../helpers"
import FeaturedImage from "../../common/featuredImage"

const SidebarCategory = ({ state }) => {
  const data = state.source.get(state.router.link)
  const currentPost = state.source[data.type][data.id]
  const posts = getPostsFromCategory(state.source, 'nguoi-moi', currentPost.id)

  return (
    <BoxRoundedBlur padding="20px 30px">
      <Title>Title here</Title>
      <Container>
        {posts.length > 0 && posts.slice(0, 2).map((post) => {
          const featuredMediaId = parseInt(post.featured_media)

          return (
            <PostItem className="img-hover-scale">
              <PostImage>
                <FeaturedImage id={featuredMediaId} className="img-scale" />
              </PostImage>
              <PostTitle>{decode(post.title.rendered)}</PostTitle>
            </PostItem>
          )
        })}
      </Container>
    </BoxRoundedBlur>
  )
}

const Title = styled.div`
  margin-bottom: 20px;
`

const Container = styled.div`

`

const PostItem = styled(Link)`
  display: block;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`

const PostImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`

const PostTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export default connect(SidebarCategory)