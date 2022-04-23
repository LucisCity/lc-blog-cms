import { useCallback, useEffect, useState } from "react"
import { connect, decode } from "frontity"
import i18n from "../../translations/i18n"
import { debounce, languageSubdirectory } from "../../helpers"
import Loading from "../common/loading"

const SearchForm = ({ state, actions }) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { t } = i18n

  const redirectToSearchResult = (e) => {
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
    }, 500),
    []
  )

  const handleSearchTyping = (event) => {
    const value = decode(event.target.value)
    debounceSearchTyping(value.toLowerCase())
  }

  const getSearchResults = async (value) => {
    const searchLink = `${languageSubdirectory(state)}?s=${value}`
    setIsLoading(true)
    try {
      await actions.source.fetch(searchLink, { force: true })
      const results = state.source.get(searchLink)
      const posts = results.items.map(({ type, id }) => {
        return state.source[type][id]
      })
      state.theme.searchResults = posts
      console.log('results: ', results)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
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
    <form onSubmit={redirectToSearchResult}>
      <input
        type="text"
        placeholder={t('Search')}
        onChange={handleSearchTyping}
        autoFocus
      />
      {isLoading && <Loading />}
      {/* <Loading /> */}
    </form>
  )
}

export default connect(SearchForm)