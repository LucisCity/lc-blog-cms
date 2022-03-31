export const getPostsFromCategory = ({ post, category }, categoryTarget, currentPost = undefined) => {
  if (!categoryTarget) {
    return []
  }

  let categoryId = undefined;

  if (typeof categoryTarget === 'string') {
    categoryId = Object.values(
      Object.values(category)
        .filter(category => {
          return category.slug === categoryTarget
        })
    )[0]?.id
  }
  if (typeof categoryTarget === 'number') {
    categoryId = categoryTarget
  }

  return Object.keys(post)
  .map(postID => post[postID])
  .filter(post => post.id !== currentPost)
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

export const trimEllipsis = (str, length) => {
  if (!length || typeof length !== 'number') return str
  
  return str.length > length ? str.substring(0, length) + "..." : str;
}