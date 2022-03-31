import Root from "./components"

const lucisTheme = {
  name: "lucis-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isMobileMenuOpen: false,
      autoPrefetch: "in-view",
    },
  },
  actions: {
    theme: {
      beforeCSR: ({ state, actions }) => {
        // console.log(state)
        // console.log(actions)
      },
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      }
    }
  },
}

export default lucisTheme
