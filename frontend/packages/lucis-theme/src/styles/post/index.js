import { styled } from "frontity"
import { BoxRoundedBlur } from "../common"

export const PostDetailContainer = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    .bg-glow {
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 20%;
        z-index: -1;
        width: 400px;
        height: 250px;
        background-color: rgba(132, 66, 142, 0.48);
        filter: blur(60px);
        border-radius: 50%;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    padding: 0 20px
  }
`

export const PostContentContainer = styled.div`
  padding: 15px 7.5px;
  position: relative;
  h1 {
    margin-bottom: 28px;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #ededed;
  }
  h2 {
    margin: 28px 0 18px 0;
  }
  h3, h4, h5, h6 {
    margin: 13px 0 9px 0;
  }
  p {
    line-height: 1.8;
    margin-bottom: 20px;
    color: #d0cecc;
  }
  ul {
    line-height: 2;
    margin-bottom: 20px;
    list-style-type: disc;
    padding-left: 40px;
    color: #ededed;
  }
  figure {
    margin-bottom: 26px !important;
  }
  figcaption {
    text-align: left !important;
    font-style: italic;
    color: #ededed !important;
    font-size: 14px !important;
    padding: 10px 20px;
    line-height: 1.6;
    background-color: rgba(39,39,39,0.8);
    border-radius: 10px;
    margin: 18px 0 0 !important;
    opacity: .8;
  }
  img {
    border-radius: 10px !important;
  }
  a {
    color: #cfb160;
    &:hover {
      text-decoration: underline;
    }
  }
  h2, h3, h4, h5, h6 {
    scroll-margin-top: 80px;
  }
  @supports (-webkit-hyphens:none) {
    /* Safari-only */
    h2, h3, h4, h5, h6 {
      padding-top: 80px;
      margin-top: -80px;
    }
  }
  @media screen and (min-width: 768px) {
    flex: 1;
  }
`

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 35px;
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  img {
    display: inline-block;
    margin-right: 10px;
  }
`

export const PostDate = styled.div`
  span {
    display: inline-block;
    padding: 2px;
    &:first-child {
      border-right: 1px solid #3b3a3a;
      padding-right: 4px;
    }
  }
`

export const PostDetail = styled.div`
  display: flex;
  flex: 1;
`

export const RightSidebarContainer = styled.aside`
  padding: 15px 15px 15px 7.5px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 992px) {
    width: 300px;
    position: sticky;
    top: 70px;
    max-height: 100vw;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`
export const LeftSidebarContainer = styled.aside`
  display: none;
  &.bg-glow {
    &::before {
      width: 140px;
      height: 140px;
      top: 40%;
      right: 0;
    }
  }
  @media screen and (min-width: 768px) {
    display: block;
    width: 250px;
    position: sticky;
    top: 70px;
    max-height: calc(100vh - 140px);
    padding: 15px 7.5px 15px 15px;
  }
  @media screen and (min-width: 1200px) {
    width: 325px;
  }
`

export const TableOfContentsContainer = styled(BoxRoundedBlur)`
  max-height: calc(100% - 200px);
  display: flex;
  font-size: 14px;
  color: #ededed;
  nav {
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    ol {
      padding-left: 30px;
      > li {
        padding-left: 10px;
      }
    }
    ul {
      padding-left: 5px;
    }
    li {
      line-height: 1.5;
      margin-bottom: 15px;
    }
    a {
      display: flex;
      &:hover {
        color: #cfb160;
      }
      span {
        display: inline-block;
      }
    }
  }
`

export const RelatedPostsFooterContainer = styled.section`

`