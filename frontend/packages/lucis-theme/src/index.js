import Root from "./components"
import i18n from "./translations/i18n"

const lucisTheme = {
  name: "lucis-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isMobileMenuOpen: false,
      autoPrefetch: "in-view",
      language: "vi"
    },
    yoast: {
      renderTags: "both"
    }
  },
  actions: {
    theme: {
      beforeSSR: ({ state }) => {
        console.log('{beforeSSR} state.frontity.name: ', state.frontity.name);
        if (state.frontity.name === 'lucis-blog-en') {
          i18n.changeLanguage('en')
        } else {
          i18n.changeLanguage('vi')
        }
      },
      beforeCSR: ({ state }) => {
        console.log('{beforeCSR} state.frontity.name: ', state.frontity.name);
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

export default lucisTheme
