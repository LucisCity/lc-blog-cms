import React from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"
import Header from "./header"
import PostsListByCategory from "./homepage/postsListByCategory"
import Post from "./post"
import Page from "./page"
import Loading from "./common/loading"
import Archive from "./archive"
import NotFound from "./common/notfound"
import GlobalStyles from "../styles/global"
import RecentPosts from "./homepage/recentPosts"
import MediaPosts from "./homepage/mediaPosts"
import { MainBg } from "../styles/common"
import Footer from "./footer"

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <MainBg when={data.isHome}>
            <PostsListByCategory categorySlug="top-trending" title="TOP TRENDING" />
            <PostsListByCategory categorySlug="nguoi-moi" title="HOT SEARCH" />
            <RecentPosts />
            <MediaPosts />
            <PostsListByCategory categorySlug="coin-tokens" title="LUCIS REVIEW" />
          </MainBg>
          <Page when={data.isPage} />
          <Archive when={data.isArchive} />
          <Post when={data.isPost} />
          <NotFound />
        </Switch>
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  margin-top: 63px;
  @media screen and (min-width: 768px) {
    margin-top: 70px;
  }

`

export default connect(Root)
