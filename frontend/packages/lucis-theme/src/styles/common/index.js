import { styled } from "frontity"
import Link from "@frontity/components/link"
import Image from "@frontity/components/image"
import { BoxShadowGlowing, GradientBorderRadius, TextLineClamp } from "../mixins"

export const MainBg = styled.div`
  @media screen and (min-width: 768px) {
    &::before, &::after {
      content: '';
      display: block;
      position: fixed;
      width: 500px;
      height: 400px;
      border-radius: 50%;
      background: linear-gradient(#FB03F5, #AA9CFF);
      z-index: -1;
      filter: blur(150px);
    }
    &::before {
      top: 0;
      right: 0;
    }
    &::after {
      top: 80%;
      left: -70px;
    }
  }
`

export const Main = styled.main`
  margin: 68px 0 50px;
  @media screen and (min-width: 768px) {
    margin: 79px 0 150px;
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
  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`

export const HomepageSection = styled.section`
  margin-bottom: 70px;
  scroll-margin-top: 85px;
  @supports (-webkit-hyphens:none) {
    /* Safari-only */
    padding-top: 85px;
    margin-top: -85px;
  }
  @media screen and (min-width: 768px) {
    scroll-margin-top: 100px;
    @supports (-webkit-hyphens:none) {
      /* Safari-only */
      padding-top: 100px;
      margin-top: -100px;
    }
  }
  @media screen and (min-width: 1440px) {
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
  @media screen and (min-width: 1440px) {
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
  padding: 15px;
  @media screen and (min-width: 1440px) {
    padding: 30px 15px 40px;
  }
`

export const PostsGridTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
  ${TextLineClamp(3)};
  @media screen and (min-width: 1440px) {
    margin-bottom: 35px;
  }
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
  @media screen and (min-width: 1440px) {
    padding: 8px 10px;
    font-size: 16px;
  }
`

// Recent
export const RecentPostsGrid = styled.div`
  display: grid;
  gap: 20px;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 250px);
    gap: 16px;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 297px);
  }
  ${PostsGridRibbon} {
    font-size: 10px;
    padding: 5px 8px;
    &::after {
      content: none;
    }
  }
  ${PostsGridItem} {
    border-radius: 0;
    &:first-of-type {
      @media screen and (min-width: 992px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
      }
      @media screen and (min-width: 1200px) {
        grid-column-end: 4;
      }
      ${PostsGridTitle} {
        @media screen and (min-width: 992px) {
          font-size: 24px;
          ${TextLineClamp(3)}
        }
        @media screen and (min-width: 1200px) {
          font-size: 36px;
          ${TextLineClamp(2)}
        }
      }
      ${PostsGridInfo} {
        @media screen and (min-width: 992px) {
          height: 185px;
          padding: 25px;
        }
      }
      ${PostsGridFooter} {
        @media screen and (min-width: 992px) {
          font-size: 16px;
          margin-bottom: 5px;
        }
      }
      ${PostsGridRibbon} {
        @media screen and (min-width: 992px) {
          top: 25px;
          left: 25px;
          font-size: 14px;
        }
      }
    }
    &:last-child {
      @media screen and (min-width: 992px) {
        grid-column-start: 3;
        grid-column-end: 5;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      @media screen and (min-width: 1200px) {
        grid-column-start: 4;
        grid-column-end: 6;
      }
      ${PostsGridTitle} {
        @media screen and (min-width: 992px) {
          font-size: 18px;
          ${TextLineClamp(3)}
        }
        @media screen and (min-width: 1200px) {
          font-size: 24px;
          ${TextLineClamp(2)}
        }
      }
      ${PostsGridInfo} {
        @media screen and (min-width: 992px) {
          height: 145px;
          padding: 25px;
        }
      }
      ${PostsGridRibbon} {
        @media screen and (min-width: 992px) {
          top: 25px;
          left: 25px;
        }
      }
    }
    ${PostsGridImage} {
      border-radius: 0;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    ${PostsGridTitle} {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 0;
      text-transform: capitalize;
      ${TextLineClamp(3)}
      @media screen and (min-width: 992px) {
        font-size: 14px;
      }
    }
    ${PostsGridInfo} {
      display: flex;
      flex-direction: column-reverse;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 15px;
      height: 120px;
      background: rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(4px);
      @media screen and (min-width: 992px) {
        height: 110px;
      }
    }
    ${PostsGridFooter} {
      font-weight: 600;
      font-size: 12px;
      margin-bottom: 5px;
    }
    ${PostAuthor} {
      width: auto;
      margin-bottom: 0;
    }
    ${AuthorName} {
      margin-right: 4px;
    }
    ${PostsGridDate} {
      color: #ffffff;
    }
  }
`

// Media
export const PostsGridExcerp = styled.div`
  font-size: 16px;
  font-weight: 300;
  margin: 10px 0;
  line-height: 1.2;
  ${TextLineClamp(3)};
  @media screen and (min-width: 992px) {
    font-size: 20px;
    margin: 22px 0 30px;
    ${TextLineClamp(6)};
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`

export const MediaPostsGrid = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 260px);
    gap: 30px;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 260px);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 220px);
  }
  @media screen and (min-width: 1200px) {
    gap: 40px;
  }
  @media screen and (min-width: 1440px) {
    gap: 80px 48px;
  }
  ${PostsGridItem} {
    background: none;
    margin-bottom: 20px;
    ${PostsGridRibbon} {
      top: 25px;
      left: 25px;
      font-size: 10px;
      padding: 3px 5px;
    }
    ${PostsGridImage} {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &:first-of-type {
      ${PostsGridRibbon} {
        font-size: 16px;
        padding: 5px 10px;
      }
      @media screen and (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
        display: flex;
        margin-bottom: 0;
      }
      @media screen and (min-width: 992px) {
        grid-column-end: 5;
        grid-row-end: 3;
      }
      @media screen and (min-width: 1440px) {
        margin-bottom: 30px;
      }
      ${PostsGridImage} {
        min-width: 320px;
        ${GradientBorderRadius('#CD28E8', '#0BEBD6', '16px')}
        @media screen and (min-width: 768px) {
          min-width: 400px;
        }
        @media screen and (min-width: 992px) {
          min-width: 550px;
        }
        @media screen and (min-width: 1200px) {
          min-width: 600px;
        }
        @media screen and (min-width: 1440px) {
          min-width: 683px;
        }
      }
      ${PostsGridInfo} {
        padding: 15px;
        @media screen and (min-width: 992px) {
          padding: 25px 22px;
        }
      }
      ${PostsGridTitle} {
        font-size: 16px;
        line-height: 1.3;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 10px;
        ${TextLineClamp(3)}
        @media screen and (min-width: 992px) {
          font-size: 26px;
          margin-bottom: 20px;
        }
        @media screen and (min-width: 1440px) {
          font-size: 32px;
        }
      }
      ${PostsGridDate} {
        font-size: 14px;
        font-weight: 300;
        @media screen and (min-width: 1440px) {
          font-size: 18px;
        }
      }
      ${AuthorAvatar} {
        width: 28px;
        height: 28px;
      }
      ${AuthorName} {
        font-size: 12px;
        @media screen and (min-width: 992px) {
          font-size: 16px;
        }
      }
    }
    &:not(:first-of-type) {
      margin-bottom: 30px;
      ${BoxShadowGlowing()}
      ${GradientBorderRadius('#CD28E8', '#0BEBD6', '16px')}
      @media screen and (min-width: 768px) {
        margin-bottom: 0;
      }
      @media screen and (min-width: 1440px) {
        margin-bottom: -30px;
      }
      ${PostsGridRibbon} {
        &::after {
          content: none;
        }
      }
      ${PostsGridInfo} {
        display: flex;
        flex-direction: column-reverse;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 15px;
        height: 100px;
        background: rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(4px);
        justify-content: start;
        @media screen and (min-width: 1200px) {
          padding: 25px 15px;
          height: 120px;
        }
      }
      ${PostsGridTitle} {
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 500;
        ${TextLineClamp(2)}
      }
      ${PostsGridFooter} {
        margin-bottom: 12px;
        font-size: 12px;
        font-weight: 600;
      }
      ${PostsGridDate} {
        color: #ffffff;
      }
      ${PostAuthor} {
        width: auto;
        margin-bottom: 0;
      }
      ${AuthorName} {
        margin-right: 3px;
      }
    }
    @media screen and (min-width: 992px) {
      &:nth-of-type(3), &:nth-of-type(6) {
        grid-column-start: 2;
        grid-column-end: 4;
        ${PostsGridInfo} {
          padding: 15px;
          height: 120px;
          @media screen and (min-width: 1200px) {
            padding: 20px 15px;
            height: 150px;
          }
        }
        ${PostsGridTitle} {
          font-size: 20px;
          @media screen and (min-width: 1200px) {
            font-size: 24px;
          }
        }
      }
    }
  }
`

export const PostsGridContent = styled.div`

`

// Ranking

export const Ranking = styled.div`
  padding: 80px 0;
  @media screen and (min-width: 1200px){
    padding: 120px 0 250px;
  }
  ${Container} {
    position: relative;
    &::before {
      @media screen and (min-width: 576px){
        content: '';
        display: block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #36338c;
        width: 904px;
        height: 904px;
        left: -171%;
        top: -105%;
      }
      @media screen and (min-width: 768px){
        width: 1274px;
        height: 1274px;
        left: -181%;
        top: -113%;
      }
      @media screen and (min-width: 992px){
        left: -134%;
        top: -71%;
      }
      @media screen and (min-width: 1200px){
        top: -55%;
        left: -112%;
      }
      @media screen and (min-width: 1440px){
        left: -104%;
        top: -50%;
      }
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