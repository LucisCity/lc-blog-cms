import React from "react"
import { connect, decode, styled } from "frontity"
import FeaturedImage from "../common/featuredImage"
import Favorite from "../../images/Favorite_duotone.svg"
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
  PostsGridTitle,
  SectionTitle
} from "../../styles/common"
import dayjs from "dayjs"
import i18n from "../../translations/i18n"

const Archive = ({ state, searchQuery }) => {
  const data = state.source.get(state.router.link)
  const { t } = i18n
  return (
    <ArchiveSection>
      <Container>
        <SectionTitle>
          {
            data.isSearch ? `${t('Found results')} "${searchQuery}"` : decode(state.source[data.taxonomy][data.id]?.name)
          }
        </SectionTitle>
        {
          data.items.length ? (
            <PostsGrid>
            {data.items.map(({type, id}) => {
              const post = state.source[type][id]
              const featuredMediaId = parseInt(post.featured_media)
              const author = state.source.author[post.author]
              const formatedDate = dayjs(post.date).format('MMMM DD, YYYY')

              return (
                <PostsGridItem key={post.id} link={post.link}>
                  <PostsGridImage>
                    <FeaturedImage id={featuredMediaId} />
                  </PostsGridImage>
                  <PostsGridInfo>
                    <PostsGridTitle>{decode(post.title?.rendered)}</PostsGridTitle>
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
          ) : <h3>{t('No posts')}</h3>
        }
      </Container>
    </ArchiveSection>
  )
}

const ArchiveSection = styled(HomepageSection)`
  padding-top: 30px;
  @media screen and (min-width: 1200px) {
    padding-top: 50px;
  }
`

export default connect(Archive)