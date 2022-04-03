import React from "react"
import { connect, styled, decode } from "frontity"
import { BoxRoundedBlur } from "../../../styles/common"
import Link from "@frontity/components/link"
import { getPostsFromCategory } from "../../../helpers"
import FeaturedImage from "../../common/featuredImage"

const RelatedPosts = ({ state }) => {
  const data = state.source.get(state.router.link)
  const currentPost = state.source[data.type][data.id]
  const posts = getPostsFromCategory(state.source, 'nguoi-moi', currentPost.id)
  const tags = currentPost.tags.map((tagId) => {
    return state.source.tag[tagId]
  })

  return (
    posts.length > 0 && (
      <RelatedPostsContainer padding="20px 30px">
        <Title>Tin liên quan</Title>
        <PostsContainer>
          {posts.slice(0, 10).map((post) => {
            const featuredMediaId = parseInt(post.featured_media)

            return (
              <PostItem
                key={post.id}
                className="img-hover-scale"
                link={post.link}
              >
                <PostImage>
                  <FeaturedImage id={featuredMediaId} className="img-scale" />
                </PostImage>
                <PostTitle>{decode(post.title.rendered)}</PostTitle>
              </PostItem>
            )
          })}
        </PostsContainer>
      </RelatedPostsContainer>
    )
  )
}

const RelatedPostsContainer = styled(BoxRoundedBlur)`
  max-height: calc(50% - 15px);
`

const Title = styled.div`
  margin-bottom: 20px;
`

const PostsContainer = styled.div`
  max-height: calc(100% - 40px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const PostItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`

const PostImage = styled.div`
  min-width: 80px;
  max-width: 80px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
`

const PostTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export default connect(RelatedPosts)