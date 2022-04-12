import React from "react"
import { connect, styled, decode } from "frontity"
import { BoxRoundedBlur } from "../../../styles/common"
import Link from "@frontity/components/link"
import { getPostsFromCategory } from "../../../helpers"
import FeaturedImage from "../../common/featuredImage"
import i18n from "../../../translations/i18n"

const HotNews = ({ state }) => {
  const data = state.source.get(state.router.link)
  const currentPost = state.source[data.type][data.id]
  const posts = getPostsFromCategory(state.source, 'tin-hot', currentPost.id)
  const { t } = i18n

  return (
    posts.length > 0 && (
      <HotNewsContainer padding="20px 30px">
        <Title>{t('Hot news')}</Title>
        <PostsContainer>
          {posts.slice(0, 2).map((post) => {
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
      </HotNewsContainer>
    )
  )
}

const HotNewsContainer = styled(BoxRoundedBlur)`
  min-height: calc(50% - 15px);
  margin-bottom: 0;
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

export default connect(HotNews)