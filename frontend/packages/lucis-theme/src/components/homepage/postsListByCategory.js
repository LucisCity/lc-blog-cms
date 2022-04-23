import React from "react"
import { connect, decode } from "frontity"
import { getCategoryInfo, getPostsFromCategory } from "../../helpers"
import FeaturedImage from "../common/featuredImage"
import Favorite from "../../images/Favorite_duotone.svg"
import dayjs from "dayjs"
import i18n from "../../translations/i18n"
import {
  AuthorAvatar,
  AuthorName,
  Container,
  HomepageSection,
  PostAuthor,
  PostsGrid,
  PostsGridDate,
  PostsGridFavorite,
  PostsGridFooter,
  PostsGridImage,
  PostsGridInfo,
  PostsGridItem,
  PostsGridRibbon,
  PostsGridTitle,
  SectionTitle
} from "../../styles/common"

const PostsListByCategory = ({ state, categorySlug, title, id }) => {
  categorySlug = i18n.language === 'en' ? categorySlug + '-en' : categorySlug
  const posts = getPostsFromCategory(state.source, categorySlug)
  const categoryInfo = getCategoryInfo(state.source, categorySlug)

  return (
    <>
      {
        posts.length ? (
          <HomepageSection id={id}>
            <Container>
              <SectionTitle>{title}</SectionTitle>
              <PostsGrid>
              {posts.slice(0, 6).map((post) => {
                const featuredMediaId = parseInt(post.featured_media)
                const author = state.source.author[post.author]
                const formatedDate = dayjs(post.date).format('MMMM DD, YYYY')

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
                          <AuthorAvatar src={author?.avatar_urls[24]} />
                          <AuthorName>{author?.name}</AuthorName>
                        </PostAuthor>
                        <PostsGridDate>{formatedDate}</PostsGridDate>
                        <PostsGridFavorite src={Favorite} width="23px" />
                      </PostsGridFooter>
                    </PostsGridInfo>
                  </PostsGridItem>
                )
              })}
              </PostsGrid>
            </Container>
          </HomepageSection>
        ) : null
      }
    </>
  )
}

export default connect(PostsListByCategory)