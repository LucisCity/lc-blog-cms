import React from "react"
import PostsListByCategory from "../homepage/postsListByCategory"
import { Container, MainBg, Ranking } from "../../styles/common"
import Image from "@frontity/components/image"
import rankingImg from "../../images/ranking.png"
import i18n from "../../translations/i18n"

const LucisInsight = () => {
  const { t } = i18n

  return (
    <MainBg>
      <Ranking>
        <Container>
          <Image src={rankingImg} />
        </Container>
      </Ranking>
      <PostsListByCategory categorySlug="lucis-review" title={t('Lucis review')} id="lucis-review" />
    </MainBg>
  )
}

export default LucisInsight
