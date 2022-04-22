import React from "react"
import PostsListByCategory from "../homepage/postsListByCategory"
import { Container, MainBg, Ranking } from "../../styles/common"
import Image from "@frontity/components/image"
import rankingImg from "../../images/ranking.png"
import i18n from "../../translations/i18n"
import { connect } from "frontity"

const LucisInsight = ({ state }) => {
  const data = state.source.get(state.router.link)
  const { t } = i18n

  return (
    <MainBg>
      <Ranking>
        <Container>
          <Image src={rankingImg} />
        </Container>
      </Ranking>
      <PostsListByCategory categorySlug="lucis-review" title={t('Lucis review')} />
    </MainBg>
  )
}

export default connect(LucisInsight)