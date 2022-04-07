import React from "react"
import { connect, decode } from "frontity"
import { getCategoryInfo, getPostsFromCategory } from "../../helpers"
import FeaturedImage from "../common/featuredImage"
import dayjs from "dayjs"
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

  return (
    <>
      {
        posts.length ? (
          <HomepageSection>
            <Container>
              <SectionTitle>RECENT</SectionTitle>
              <RecentPostsGrid>
              {posts.slice(0, 4).map((post) => {
                const featuredMediaId = parseInt(post.featured_media)
                const author = state.source.author[post.author]
                const formatedDate = dayjs(post.date).format('MMMM DD, YYYY')
                const categoryInfo = getCategoryInfo(state.source, post.categories[0])

                return (
                  <PostsGridItem key={post.id} link={post.link}>
                    <PostsGridRibbon>{decode(categoryInfo?.name)}</PostsGridRibbon>
                    <PostsGridImage>
                      <FeaturedImage id={featuredMediaId} />
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