import React from "react"
import FeaturedImage from "../common/featuredImage"
import dayjs from "dayjs"
import { connect, decode } from "frontity"
import { getCategoryInfo, getPostsFromCategory } from "../../helpers"
import { useTranslation } from "react-i18next"
import {
  AuthorName,
  Container,
  HomepageSection,
  MediaPostsGrid,
  PostAuthor,
  PostsGridDate,
  PostsGridContent,
  PostsGridFooter,
  PostsGridImage,
  PostsGridInfo,
  PostsGridItem,
  PostsGridRibbon,
  PostsGridTitle,
  SectionTitle,
  PostsGridExcerp,
  AuthorAvatar
} from "../../styles/common"

const MediaPosts = ({ state }) => {
  const posts = getPostsFromCategory(state.source, 'media')
  const sortedPosts = posts.sort((a, b) => a.acf.order - b.acf.order)
  const { t, i18n } = useTranslation()

  return (
    <>
      {
        sortedPosts.length ? (
          <HomepageSection id="media">
            <Container>
              <SectionTitle>{t('Media')}</SectionTitle>
              <MediaPostsGrid>
              {sortedPosts.slice(0, 7).map((post, index) => {
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
                      {index === 0 ? (
                        <PostsGridContent>
                          <PostsGridDate>{formatedDate}</PostsGridDate>
                          <PostsGridExcerp>{decode(post.excerpt.rendered).slice(0, 250)}</PostsGridExcerp>
                          <PostAuthor>
                            <AuthorAvatar src={author?.avatar_urls[24]} />
                            <AuthorName>{author?.name}</AuthorName>
                          </PostAuthor>
                        </PostsGridContent>
                      ) : (
                        <PostsGridFooter>
                          <PostAuthor>
                            <AuthorName>{author?.name}</AuthorName>
                          </PostAuthor>
                          <PostsGridDate>- {formatedDate}</PostsGridDate>
                        </PostsGridFooter>
                      )}
                    </PostsGridInfo>
                  </PostsGridItem>
                )
              })}
              </MediaPostsGrid>
            </Container>
          </HomepageSection>
        ) : null
      }
    </>
  )
}

export default connect(MediaPosts)