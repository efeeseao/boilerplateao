export const getAllCategories = async () => {
  const res = await fetch('https://boilerplateao.vercel.app/api/categories')
  const data = await res.json()
  return data
}

export const getAllPostSlugsWithModifyTime = async () => {
  const res = await fetch('https://boilerplateao.vercel.app/api/posts')
  const data = await res.json()
  return data
}
