import { styled } from "frontity"
import Link from "@frontity/components/link"
import Image from "@frontity/components/image"

export const MainBg = styled.div`
  &::before, &::after {
    content: '';
    display: block;
    position: fixed;
    width: 400px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(#FB03F5, #AA9CFF);
    z-index: -1;
    filter: blur(120px);
  }
  &::before {
    top: 0;
    right: 0;
  }
  &::after {
    top: 50%;
    left: -70px;
  }
`

export const Container = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 0 15px;
  @media screen and (min-width: 576px) {
    width: 540px;
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    width: 720px;
  }
  @media screen and (min-width: 992px) {
    width: 960px;
  }
  @media screen and (min-width: 1200px) {
    width: 1140px;
  }
  @media screen and (min-width: 1400px) {
    width: 1240px;
  }
`

export const HomepageSection = styled.section`
  margin-bottom: 70px;
  @media screen and (min-width: 1400px) {
    margin-bottom: 200px;
  }
`

export const SectionTitle = styled.h2`
  font-family: 'SVN Transformer', sans-serif;
  line-height: 115%;
  font-size: 30px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 72px;
    margin-bottom: 100px;
  }
`
// posts grid
export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: 1;
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 992px) {
    gap: 40px 20px;
  }
  @media screen and (min-width: 1400px) {
    gap: 80px 20px;
  }
`

export const PostsGridItem = styled(Link)`
  display: block;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background-color: #1C1C1C;
`

export const PostsGridImage = styled.div`
  border-radius: 10px;
  overflow: hidden;
`

export const PostsGridInfo = styled.div`
  padding: 30px 15px 40px;
`

export const PostsGridTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 35px;
`

export const PostsGridFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  @media screen and (min-width: 992px) {
    width: auto;
    margin-bottom: 0;
  }
`

export const AuthorAvatar = styled(Image)`
  border-radius: 50%;
  margin-right: 10px;
`

export const AuthorName = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-weight: 700;
`

export const PostsGridDate = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-weight: 700;
  color: #B1FFF8;
`

export const PostsGridFavorite = styled(Image)`
  margin-left: auto;
`

export const PostsGridRibbon = styled.div`
  position: absolute;
  z-index: 1;
  top: 12px;
  left: 15px;
  padding: 3px 5px;
  background: #0BEBD6;
  font-size: 12px;
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -20px;
    border: 10px solid transparent;
    border-top-color: #0BEBD6;
    border-left-color: #0BEBD6;
  }
  @media screen and (min-width: 1400px) {
    padding: 8px 10px;
    font-size: 16px;
  }
`

// Recent
export const RecentPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  a {
    &:first-child {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }
    &:last-child {
      grid-column-start: 4;
      grid-column-end: 6;
      grid-row-start: 2;
      grid-row-end: 3;
    }
  }

`

export const StickyAside = styled.aside`
  min-width: 325px;
  padding: 20px;
  position: sticky;
  top: 0;
  max-height: 100vw;
`

export const BoxRoundedBlur = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 10px;
  padding: 15px;
  background: linear-gradient(90deg, hsla(0,0%,42%,0.1), rgba(38,38,38,0.3));
  box-shadow: 0 1px 2.4rem 0 rgba(0,0,0,0.1);
  margin-bottom: 15px;
  @media screen and (min-width: 992px) {
    padding: ${props => props.padding};
  }
`