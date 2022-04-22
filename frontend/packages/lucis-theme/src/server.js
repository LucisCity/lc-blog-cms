import i18n from "./translations/i18n"
import packageClient from "./client"

export default {
  ...packageClient,
  actions: {
    theme: {
      ...packageClient.actions.theme,
      beforeSSR: async ({ state, actions }) => {
        if (state.frontity.name === 'lucis-blog-en') {
          await Promise.all([
            i18n.changeLanguage('en'),
            actions.source.fetch('/en/lucis-insight/', { force: true }),
            actions.source.fetch('/category/lucis-review-en', { force: true }),
          ])
        } else {
          await Promise.all([
            i18n.changeLanguage('vi'),
            actions.source.fetch('/lucis-insight/', { force: true }),
            actions.source.fetch('/category/lucis-review', { force: true }),
          ])
        }
      }
    }
  },
}