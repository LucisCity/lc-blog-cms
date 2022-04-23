import { useEffect } from "react"
import { connect, styled, decode } from "frontity";
import { Container } from "../../styles/common";
import SearchForm from "./searchForm";
import FeaturedImage from "../common/featuredImage";
import Link from "@frontity/components/link"
import { languageSubdirectory } from "../../helpers";
import { TextLineClamp } from "../../styles/mixins";
import i18n from "../../translations/i18n"
const SearchModal = ({ state, actions }) => {
  const data = state.theme.searchResults
  const isEmpty = data.length === 0
  const { t } = i18n
  
  const handleEscapePress = (e) => {
    if (e.key === 'Escape') {
      actions.theme.closeSearchModal()
    }
  }
  
  useEffect(() => {
    window.addEventListener('keyup', handleEscapePress)

    return () => window.removeEventListener('keyup', handleEscapePress)
  }, [])

  return (
    <SearchModalWrap isSearchModalOpen={state.theme.isSearchModalOpen}>
      <Container>
        <CloseSearchModal onClick={actions.theme.closeSearchModal} />
        <SearchForm />
          {!isEmpty && (
            <>
              <SearchModalResults>
                {
                  data.slice(0, 6).map((post) => {
                    const featuredMediaId = parseInt(post.featured_media)
                    return (
                      <ResultItem key={post.id} link={post.link} onClick={actions.theme.closeSearchModal}>
                        <FeaturedImage id={featuredMediaId} />
                        <ItemTitle>{decode(post.title.rendered)}</ItemTitle>
                      </ResultItem>
                    )
                  })
                }
              </SearchModalResults>
              <ViewAll>
                <Link
                  link={`${languageSubdirectory(state)}/?s=${state.theme.searchKeyword}`}
                  onClick={actions.theme.closeSearchModal}
                >
                  {t('View all')}
                </Link>
              </ViewAll>
            </>
          )}
      </Container>
    </SearchModalWrap>
  );
};

const SearchModalWrap = styled.div`
  position: fixed;
  top: ${props => props.isSearchModalOpen ? '68px' : '-100%'};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: ${props => props.isSearchModalOpen ? '1' : '0'};
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(19, 19, 19, 0.6));
  backdrop-filter: blur(20px);
  padding: 10px 0;
  @media screen and (min-width: 758px) {
    padding: 30px;
    top: ${props => props.isSearchModalOpen ? '79px' : '-100%'};
  }
  ${Container} {
    display: block;
  }
  form {
    width: 100%;
    border-bottom: 1px solid #757575;
    position: relative;
    input {
      width: 100%;
      border: none;
      background: none;
      text-align: center;
      color: #ffffff;
      font-size: 24px;
      outline: none;
      padding: 10px 30px 10px 10px;
    }
    .ispinner {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
`

const SearchModalResults = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 30px;
  margin-bottom: 30px;
  max-height: 65vh;
  overflow: auto;
`

const ResultItem = styled(Link)`
  display: flex;
  @media screen and (min-width: 768px) {
    width: calc(50% - 15px);
  }
  img {
    width: 100px;
    border-radius: 16px;
  }
`

const ItemTitle = styled.div`
  padding: 5px 10px;
  ${TextLineClamp(2)}
`

const CloseSearchModal = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
  margin-left: auto;
  &::before, &::after {
    content: '';
    display: block;
    background: #fff;
    height: 2px;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`

const ViewAll = styled.div`
  text-align: center;
`

export default connect(SearchModal);