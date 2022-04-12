import React from "react"
import { connect, styled, decode } from "frontity"
import { BoxRoundedBlur } from "../../../styles/common"
import Link from "@frontity/components/link"
import i18n from "../../../translations/i18n"

const Keywords = ({ state }) => {
  const data = state.source.get(state.router.link)
  const post = state.source[data.type][data.id]
  const tags = post.tags.map((tagId) => {
    return state.source.tag[tagId]
  })
  const { t } = i18n

  return (
    tags.length > 0 && (
      <TagsContainer padding="20px 30px">
        <Title>{t('Keywords')}</Title>
        <ScrollContainer>
          {tags.map((tag) => (
            <Tag key={tag.id} link={tag.link}>
              {decode(tag.name)}
            </Tag>
          ))}
        </ScrollContainer>
      </TagsContainer>
    )
  )
}

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
`

const Tag = styled(Link)`
  padding: 5px 10px;
  display: inline-block;
  margin: 0 10px 10px 0;
  background-color: rgba(36, 36, 36, 0.8);
  border-radius: 5px;
  font-size: 12px;
  &:hover {
    color: #cfb160;
  }
`

const TagsContainer = styled(BoxRoundedBlur)`
  max-height: calc(200px);
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

const ScrollContainer = styled.div`
  max-height: calc(100% - 76px);
  overflow-y: auto;
`

export default connect(Keywords)