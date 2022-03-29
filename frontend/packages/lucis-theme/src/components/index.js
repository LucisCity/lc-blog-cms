import React from "react"
import { connect, styled } from "frontity"
import Switch from "@frontity/components/switch"
import Header from "./header"
import PostsListByCategory from "./homepage/postsListByCategory"
import LatestPosts from "./homepage/latestPosts"
import Post from "./post"
import Page from "./page"
import Loading from "./common/loading"
import Archive from "./archive"
import NotFound from "./common/notfound"
import GlobalStyles from "../styles/global"
import { Container } from "../styles/common"

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main className="">
        <Switch>
          <Loading when={data.isFetching} />
          <Container when={data.isHome}>
            <LatestPosts />
            <PostsListByCategory categorySlug="nguoi-moi" title="Dành cho người mới" />
            <PostsListByCategory categorySlug="coin-tokens" title="Coin & Tokens" />
            <PostsListByCategory categorySlug="he-sinh-thai" title="Hệ sinh thái" />
          </Container>
          <Page when={data.isPage} />
          <Archive when={data.isArchive} />
          <Post when={data.isPost} />
          <NotFound />
        </Switch>
      </Main>
    </>
  )
}

const Main = styled.main`
  margin-top: 140px;
`

export default connect(Root)
