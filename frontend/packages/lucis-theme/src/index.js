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
        console.log('state.frontity.name: ', state.frontity.name)
        if (state.frontity.name === 'lucis-blog-en') {
          i18n.changeLanguage('en')
        } else {
          i18n.changeLanguage('vi')
        }
        console.log('i18n: ', i18n.language, i18n.t('Top trending'))
      },
      beforeCSR: ({ state }) => {
        console.log(state.frontity.name)
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
