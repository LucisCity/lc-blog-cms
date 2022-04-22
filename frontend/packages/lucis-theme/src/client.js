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
      autoPrefetch: "in-view"
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
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false
      }
    }
  },
}