import { useCallback, useEffect, useState } from "react"
import { connect, decode } from "frontity"
import i18n from "../../translations/i18n"
import { debounce, languageSubdirectory } from "../../helpers"
import Loading from "../common/loading"

const SearchForm = ({ state, actions }) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const { t } = i18n

  const redirectToSearchResults = (e) => {
    e.preventDefault()
    const searchString = e.target[0].value

    if (searchString.trim().length > 0) {
      actions.router.set(`${languageSubdirectory(state)}?s=${searchString.toLowerCase()}`)
      actions.theme.closeSearchModal()
      window.scrollTo(0, 0)
    }
  }

  const debounceSearchTyping = useCallback(
    debounce((value) => {
      setSearchKeyword(value)
      state.theme.noSearchResults = false
    }, 300),
    []
  )

  const handleSearchTyping = (event) => {
    const value = decode(event.target.value)
    debounceSearchTyping(value.toLowerCase())
  }

  const getSearchResults = async (value) => {
    const searchLink = `${languageSubdirectory(state)}?s=${value}`
    actions.theme.startSearching()
    try {
      await actions.source.fetch(searchLink, { force: true })
      const results = state.source.get(searchLink).items
      if (results.length > 0) {
        const posts = results.map(({ type, id }) => {
          return state.source[type][id]
        })
        state.theme.searchResults = posts
        state.theme.noSearchResults = false
      } else {
        state.theme.noSearchResults = true
      }
    } catch (error) {
      state.theme.noSearchResults = true
      console.log(error)
    } finally {
      actions.theme.stopSearching()
    }
  }

  useEffect(() => {
    if (searchKeyword !== '') {
      getSearchResults(searchKeyword)
      state.theme.searchKeyword = searchKeyword
    } else {
      state.theme.searchResults = []
      state.theme.searchKeyword = ''
    }
  }, [searchKeyword])

  return (
    <form onSubmit={redirectToSearchResults}>
      <input
        type="text"
        placeholder={t('Search')}
        onChange={handleSearchTyping}
        autoFocus
      />
      {state.theme.isSearching && <Loading />}
    </form>
  )
}

export default connect(SearchForm)