import Root from "./components"
import i18n from "./translations/i18n"

export default {
  name: "lucis-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isMobileMenuOpen: false,
      isSearchModalOpen: false,
      autoPrefetch: "in-view",
      searchResults: [],
      searchKeyword: ''
    },
    yoast: {
      renderTags: "both"
    }
  },
  actions: {
    theme: {
      beforeCSR: ({ state }) => {
        if (state.frontity.name === 'lucis-blog-en') {
          i18n.changeLanguage('en')
        } else {
          i18n.changeLanguage('vi')
        }
      },
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true
        state.theme.isSearchModalOpen = false
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false
        state.theme.isSearchModalOpen = false
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false
        state.theme.searchResults = []
      },
    }
  },
}