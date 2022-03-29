import { styled } from "frontity"

export const PostDetailContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const PostContentContainer = styled.div`
  padding: 15px 7.5px;
  @media screen and (min-width: 768px) {
    flex: 1;
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
  @media screen and (min-width: 1200px) {
    width: 325px;
    position: sticky;
    top: 140px;
    max-height: 100vw;
  }
`
export const LeftSidebarContainer = styled.aside`
  width: 200px;
  position: sticky;
  top: 140px;
  max-height: 100vw;
  padding: 15px 7.5px 15px 15px;
  .childrens-heading {
    padding-left: 15px;
  }
  @media screen and (min-width: 1200px) {
    width: 325px;
  }
`