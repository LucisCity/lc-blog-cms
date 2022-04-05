import React from "react"
import { connect } from "frontity"
import PostsListByCategory from "../homepage/postsListByCategory"
import { Container, MainBg, Ranking } from "../../styles/common"
import Image from "@frontity/components/image"
import rankingImg from "../../images/ranking.png"

const LucisInsight = ({ state }) => {
  const data = state.source.get(state.router.link)

  return (
    <MainBg>
      <Ranking>
        <Container>
          <Image src={rankingImg} />
        </Container>
      </Ranking>
      <PostsListByCategory categorySlug="lucis-review" title="LUCIS REVIEW" id="lucis-review" />
    </MainBg>
  )
}

export default connect(LucisInsight)
