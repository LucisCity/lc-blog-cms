import React from "react"
import { connect } from "frontity"
import { Container } from "../../styles/common"

const Page = ({ state }) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]

  return (
    <section>
      <Container>
        <h1>{page?.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: page?.content.rendered }} />
      </Container>
    </section>
  )
}

export default connect(Page)
