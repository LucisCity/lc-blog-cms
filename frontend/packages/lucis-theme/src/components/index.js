import React from "react"
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
import Footer from "./footer"
import Image from "@frontity/components/image"
import rankingImg from "../images/ranking.png"
import LucisInsight from "./lucisInsight"
import { connect } from "frontity"
import { Container, MainBg, Ranking, Main } from "../styles/common"
import { useTranslation } from "react-i18next"

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  const { t, i18n } = useTranslation()

  return (
    <>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <MainBg when={data.isHome}>
            <Ranking>
              <Container>
                <Image src={rankingImg} />
              </Container>
            </Ranking>
            <PostsListByCategory categorySlug="top-trending" title={t('Top trending')} />
            <PostsListByCategory categorySlug="hot-search" title={t('Hot search')} />
            <RecentPosts />
            <MediaPosts />
            <PostsListByCategory categorySlug="lucis-review" title={t('Lucis review')} id="lucis-review" />
          </MainBg>
          <Page when={data.isPage} />
          <Archive when={data.isArchive} />
          <Post when={data.isPost} />
          <LucisInsight
            when={
              ['/lucis-insight/', '/en/lucis-insight/'].includes(state.router.link)
            }
          />
          <NotFound />
        </Switch>
      </Main>
      <Footer />
    </>
  )
}

export default connect(Root)
