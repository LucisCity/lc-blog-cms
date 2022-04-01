import React from "react"
import { connect, decode } from "frontity"
import { getPostsFromCategory } from "../../helpers"
import FeaturedImage from "../common/featuredImage"
import Favorite from "../../images/Favorite_duotone.svg"
import {
  AuthorAvatar,
  AuthorName,
  Container,
  HomepageSection,
  PostAuthor,
  PostsGridDate,
  PostsGridFavorite,
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
  const posts = getPostsFromCategory(state.source, 'he-sinh-thai')
  
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

                return (
                  <PostsGridItem key={post.id} link={post.link}>
                    <PostsGridRibbon>GAME NFT</PostsGridRibbon>
                    <PostsGridImage>
                      <FeaturedImage id={featuredMediaId} />
                    </PostsGridImage>
                    <PostsGridInfo>
                      <PostsGridTitle>{decode(post.title.rendered)}</PostsGridTitle>
                      <PostsGridFooter>
                        <PostAuthor>
                          <AuthorAvatar src={author.avatar_urls[24]} />
                          <AuthorName>{author.name}</AuthorName>
                        </PostAuthor>
                        <PostsGridDate> March 24, 2022</PostsGridDate>
                        <PostsGridFavorite src={Favorite} width="23px" />
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