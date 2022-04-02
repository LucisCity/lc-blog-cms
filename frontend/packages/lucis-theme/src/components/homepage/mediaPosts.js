import React from "react"
import { connect, decode } from "frontity"
import { getPostsFromCategory } from "../../helpers"
import FeaturedImage from "../common/featuredImage"
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
  console.log(sortedPosts)
  const firstPost = posts[0]

  return (
    <>
      {
        posts.length ? (
          <HomepageSection>
            <Container>
              <SectionTitle>MEDIA</SectionTitle>
              <MediaPostsGrid>
              {sortedPosts.slice(0, 7).map((post, index) => {
                const featuredMediaId = parseInt(post.featured_media)
                const author = state.source.author[post.author]

                return (
                  <PostsGridItem key={post.id} link={post.link}>
                    <PostsGridRibbon>GAME NFT</PostsGridRibbon>
                    <PostsGridImage>
                      <FeaturedImage id={featuredMediaId} />
                    </PostsGridImage>
                    <PostsGridInfo>
                      <PostsGridTitle>{decode(post.title.rendered)}</PostsGridTitle>
                      {index === 0 ? (
                        <PostsGridContent>
                          <PostsGridDate>March 24, 2022</PostsGridDate>
                          <PostsGridExcerp>dasfasdf</PostsGridExcerp>
                          <PostAuthor>
                            <AuthorAvatar src={author.avatar_urls[24]} />
                            <AuthorName>{author.name}</AuthorName>
                          </PostAuthor>
                        </PostsGridContent>
                      ) : (
                        <PostsGridFooter>
                          <PostAuthor>
                            <AuthorName>{author.name}</AuthorName>
                          </PostAuthor>
                          <PostsGridDate>- March 24, 2022</PostsGridDate>
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