export const getPostsFromCategory = ({ post, category }, categorySlug) => {
  const categoryId = Object.values(
    Object.values(category)
      .filter(category => {
        return category.slug === categorySlug
      })
  )[0]?.id

  return Object.keys(post)
  .map(postID => post[postID])
  .filter(({categories}) => categories.includes(parseInt(categoryId)))
}

export const stringToSlug = (string) => {
  string = string.toLowerCase()
	  .normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/([^0-9a-z-\s])/g, '')
    .replace(/(\s+)/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')

  return string
}