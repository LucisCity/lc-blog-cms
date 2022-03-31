import React from "react"
import { connect, styled, decode } from "frontity"
import { getPostsFromCategory } from "../../helpers"
import { RelatedPostsFooterContainer } from "../../styles/post"
import FeaturedImage from "../common/featuredImage"
import Link from "@frontity/components/link"
import Image from "@frontity/components/image"

const RelatedPostsFooter = ({ state }) => {
  const data = state.source.get(state.router.link)
  const currentPost = state.source[data.type][data.id]
  const author = state.source.author[currentPost.author]
  const categoryId = currentPost.categories[0]
  const posts = getPostsFromCategory(state.source, categoryId, currentPost.id)

  return (
    <RelatedPostsFooterContainer>
      <Container>
        <Title>Tin liên quan</Title>
        <PostsGrid>
          {posts.length > 0 && posts.slice(0, 6).map((post) => {
            const featuredMediaId = parseInt(post.featured_media)

            return (
              <PostItem
                key={post.id}
                link={post.link}
                className="img-hover-scale"
              >
                <PostImage>
                  <FeaturedImage id={featuredMediaId} className="img-scale" />
                </PostImage>
                <Info>
                  <PostTitle>{decode(post.title.rendered)}</PostTitle>
                  <Author>
                    <Image src={author.avatar_urls[24]} />
                    <span>
                      {author.name}
                    </span>
                  </Author>
                </Info>
              </PostItem>
            )
          })}
        </PostsGrid>
      </Container>
    </RelatedPostsFooterContainer>
  )
}

const Container = styled.div`
  width: 1180px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`

const Title = styled.h3`
  text-align: center;
  font-size: 30px;
  color: #ededed;
  margin-bottom: 30px;
`

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1;
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`

const PostItem = styled(Link)`
  display: block;
  background-color: #252423;
  border-radius: 10px;
  &:hover {
    h4 {
      color: gray;
    }
    span {
      color: #ededed;
    }
  }
`

const PostImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
`

const PostTitle = styled.h4`
  margin-bottom: 20px;
  color: #ededed;
  font-size: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Info = styled.div`
  padding: 20px;
`

const Author = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
  }
  span {
    color: #ededed;
    font-size: 14px;
  }
`
export default connect(RelatedPostsFooter)