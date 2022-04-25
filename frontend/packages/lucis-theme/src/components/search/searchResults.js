import { connect, decode } from "frontity"
import { Container, HomepageSection } from "../../styles/common"
import Archive from "../archive"
import i18n from "../../translations/i18n"

const SearchResults = ({ state }) => {
  const data = state.source.get(state.router.link)
  const { total, searchQuery } = data
  const isEmpty = total === 0
  const { t } = i18n

  return (
    <>
      {isEmpty ? (
        <HomepageSection>
          <Container>
            <h2 style={{ paddingTop: '20px' }}>
              {t('No results')} "{decode(searchQuery)}"
            </h2>
          </Container>
        </HomepageSection>
      ) : (
        <Archive searchQuery={searchQuery}/>
      )}
    </>
  )
}

export default connect(SearchResults)