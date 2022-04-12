import React from "react"
import FeaturedImage from "../common/featuredImage"
import dayjs from "dayjs"
import { connect, decode } from "frontity"
import { getCategoryInfo } from "../../helpers"
import i18n from "../../translations/i18n"
import {
  AuthorName,
  Container,
  HomepageSection,
  PostAuthor,
  PostsGridDate,
  PostsGridFooter,
  PostsGridImage,
  PostsGridInfo,
  PostsGridItem,
  PostsGridRibbon,
  PostsGridTitle,
  RecentPostsGrid,
  SectionTitle
} from "../../styles/common"

const RecentPosts = ({ state }) => {
  const data = state.source.get(state.router.link)
  const posts = data.items.map(({ type, id }, index) => {
    return state.source[type][id]
  })
  const { t } = i18n

  return (
    <>
      {
        posts.length ? (
          <HomepageSection>
            <Container>
              <SectionTitle>{t('Recent')}</SectionTitle>
              <RecentPostsGrid>
              {posts.slice(0, 4).map((post) => {
                const featuredMediaId = parseInt(post.featured_media)
                const author = state.source.author[post.author]
                const formatedDate = dayjs(post.date).format('MMMM DD, YYYY')
                const categoryInfo = getCategoryInfo(state.source, post.categories[0])

                return (
                  <PostsGridItem key={post.id} link={post.link} className="img-hover-scale">
                    <PostsGridRibbon>{decode(categoryInfo?.name)}</PostsGridRibbon>
                    <PostsGridImage>
                      <FeaturedImage id={featuredMediaId} className="img-scale" />
                    </PostsGridImage>
                    <PostsGridInfo>
                      <PostsGridTitle>{decode(post.title.rendered)}</PostsGridTitle>
                      <PostsGridFooter>
                        <PostAuthor>
                          <AuthorName>{author?.name}</AuthorName>
                        </PostAuthor>
                        <PostsGridDate>- {formatedDate}</PostsGridDate>
                      </PostsGridFooter>
                    </PostsGridInfo>
                  </PostsGridItem>
                )
              })}
              </RecentPostsGrid>
            </Container>
          </HomepageSection>
        ) : null
      }
    </>
  )
}

export default connect(RecentPosts)