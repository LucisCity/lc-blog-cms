const categoryFilter = (categories, categoryTarget) => {
  return Object.values(
    Object.values(categories)
      .filter(category => {
        return category.slug === categoryTarget
      })
  )[0]
}

export const getPostsFromCategory = ({ post, category }, categoryTarget, currentPost = undefined) => {
  if (!categoryTarget || !category) {
    return []
  }

  let categoryId = undefined;

  if (typeof categoryTarget === 'string') {
    categoryId = categoryFilter(category, categoryTarget)?.id
  }
  if (typeof categoryTarget === 'number') {
    categoryId = categoryTarget
  }

  return Object.keys(post)
  .map(postID => post[postID])
  .filter(post => post.id !== currentPost)
  .filter(({categories}) => categories.includes(parseInt(categoryId)))
}



export const getCategoryInfo = ({ category }, categoryTarget) => {
  if (!categoryTarget || !category) {
    return null
  }

  if (typeof categoryTarget === 'string') {
    return categoryFilter(category, categoryTarget)
  }
  if (typeof categoryTarget === 'number') {
    return category[categoryTarget]
  }
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